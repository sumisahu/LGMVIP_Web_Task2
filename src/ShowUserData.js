import MaterialTable from "@material-table/core";
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ShowUserData(props)
{

    const [userData,setUserData]=useState([])
    const progressBar=()=>{
      return(
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      )
    }


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cb3757d7famsh9e535f3d25b5c53p1696f1jsn43acf2108506',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch('https://reqres.in/api/users?page=1', options) //API USED
           
      .then(response => response.json())
      .then((response) =>{console.log(response)
          setUserData(response.data)
      })
         
      .catch(err => console.error(err));
  

  function showData()
  {return(
    <div style={{background:'#7CEECE'}}>
    <div style={{padding:10}}>
    <MaterialTable
        title="UserData"
        data={userData}
        columns={[
          {
            title: "First Name",
            field: "first_name",
           },
          {
            title: "Last Name",
            field: "last_name",
          },
          {
            title: "Email",
            field: "email",
           },
          {
            title: "image",
            render: (rowData) => {
              return (
                <img src={rowData.avatar} style={{ width: 50, borderRadius: "50%" }} />
              );
            },
            
          },
        ]}
      />
      </div>
      </div>
       )
 
  }
  

    return(
     <div>
        {showData()}
     </div>      
 
    )

}