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
    const id = useParams()._id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/games/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/games/${id}`, {
          Name:String(inputs.Name),
          Url:String(inputs.Url),
          Authors:String(inputs.Authors),
          Published_date:Date(inputs.publication_date),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
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
             
             <Button variant="contained" type="submit">
               Update Game
             </Button>
           </Box>
         </form>
        )}
      </div>
    );
  };
  
  export {GameDetail};
  