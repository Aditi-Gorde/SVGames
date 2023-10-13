//To update book values 

import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const GameDetail = () => {
    const [inputs, setInputs] = useState();
    const {id} = useParams();
    console.log(id);

    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`${process.env.REACT_APP_backend_url}/games/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.game));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`${process.env.REACT_APP_backend_url}/games/${id}`, {
          Name:String(inputs.Name),
          Url:String(inputs.Url),
          Authors:String(inputs.Authors),
          Published_date:Date(inputs.Published_date),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/AllGames"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      
         <div  style={{backgroundImage:`url(https://images.unsplash.com/photo-1547104442-044448b73426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)`}}>
      <h3 className="heading">Add Game</h3>
        {inputs && (
           <form onSubmit={handleSubmit} >
           <Box
             display="flex"
             flexDirection="column"
             justifyContent={"center"}
             maxWidth={700}
             alignContent={"center"}
             alignSelf="center"
             marginLeft={"auto"}
             marginRight="auto"
             marginTop={10}
           >
            <FormLabel>Name</FormLabel>
           <TextField
             value={inputs.Name}
             onChange={handleChange}
             margin="normal"
             fullWidth
             variant="outlined"
             name="Name"
           />
           <FormLabel>Url</FormLabel>
           <TextField
             value={inputs.Url}
             onChange={handleChange}
             margin="normal"
             fullWidth
             variant="outlined"
             name="Url"
           />
           <FormLabel>Authors</FormLabel>
           <TextField
             value={inputs.Authors}
             onChange={handleChange}
             margin="normal"
             fullWidth
             variant="outlined"
             name="Authors"
           />
            
           <FormLabel>Published Date</FormLabel>
           <TextField
             value={inputs.Published_date}
             onChange={handleChange}
             margin="normal"
             fullWidth
             variant="outlined"
             name="Published_date"
           />
        <br />
             
             <Button style={{backgroundColor:'#10195d'}} variant="contained" type="submit">
               Update Game
             </Button>
           </Box>
         </form>
        )}
      </div>
    );
  };
  
  export {GameDetail};
  