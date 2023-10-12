//Card to display a single book

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../assets/SingleGame.style.css';
import { useAuthContext } from '../hooks/useAuthContext';


function SingleGame({ game }) {
  const { user } = useAuthContext();

  const history = useNavigate();
  const _id = game._id;
  const deleteHandler = async () => {
    console.log(_id);
    await axios
      .delete(`http://localhost:5000/games/${_id}`)
      .then((res) => res.data)
      .then(() => history("/login"))
      .then(() => history("/"))
  };

  const updateHandler = async (_id) => {
    history(`/GameDetail/${_id}`)
  }

  const [selectedOption, setSelectedOption] = useState('Edit');

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
  };

  const { format } = require('date-fns');

  const dbDateTime = new Date(game.Published_date);

  // Convert datetime to date with a specific format
  const formattedDate = format(dbDateTime, 'MM/dd/yyyy');
  
  



  return (
    <Card  style={{ width:'100%'}}>
        <Card.Img src="https://images.unsplash.com/photo-1529154691717-3306083d869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Card image" style={{height:'22rem',width:'20rem'}} />
        {/* <Card.ImgOverlay> */}
      <Card.Body>
        <Card.Title style={{ fontSize: 16, height: '2rem' }}> 
        <a style={{color:'black'}} href={game.Url} target="_blank" rel="noopener noreferrer">
          {game.Name}
        </a>
        </Card.Title>
      
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ height: '4rem' }} >Authors : {game.Authors}</ListGroup.Item>
        {/* <ListGroup.Item style={{ height: '4rem' }}>Url : {game.Url}</ListGroup.Item> */}
        <ListGroup.Item style={{ height: '4rem' }}>Published Date : {formattedDate}</ListGroup.Item>
        {/* <Link to={`/AllBooks/${book._id}`}>Details</Link> */}
        {user ? (
          <div className="list-group-flush mx-auto">
            <ListGroup.Item className='mx-auto'>
              <Dropdown onSelect={handleDropdownSelect} className='mx-auto' >
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {selectedOption}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Update" onClick={() => updateHandler(_id)}>Update</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteHandler(_id)} eventKey="Delete">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>
          </div>

        ) : ''}

      </ListGroup>
      {/* </Card.ImgOverlay> */}
    </Card>
  );
}

export default SingleGame;