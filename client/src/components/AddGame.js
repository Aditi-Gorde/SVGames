//To create a new Game and add to the databasee

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios"; 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/AddGame.style.css';

const AddGame = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
        Name:"",
        Url:"",
        Authors:"",
        Published_date:"",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post(`${process.env.REACT_APP_backend_url}/games`, {
        Name:String(inputs.Name),
        Url:String(inputs.Url),
        Authors:String(inputs.Authors),
        Published_date:Date(inputs.Published_date),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/AllGames"));
  };

  return (
    <div className="AddBook-main">
      <h3 className="heading">Add Game</h3>
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

        <button class="btn ac" type="submit" >ADD GAME</button>
      </Box>
    </form>
    </div>
  );
};

export { AddGame };

//OJh2u6Sppq13XZVJ aditigorde1002