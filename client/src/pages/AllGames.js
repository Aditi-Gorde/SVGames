//To display all the books using pagination

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleGame from '../components/SingleGame';
import '../assets/AllGames.style.css'
import Pagination from 'react-bootstrap/Pagination';
import { Row, Col, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Search from '../components/Search';


function AllBooks() {

  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch books from the API
    //?page=${currentPage}
    axios
      .get(`http://localhost:5000/games/?page=${currentPage}`)
      .then((response) => {
        setGames(response.data.games);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handleSearch = (results) => {
    setGames(results.games);
  };

  return (
    <div style={{ width: '100%', padding: 30, paddingTop:'0.5rem' }}>
      <h2 className='heading' >Games List</h2>
      <div className='w-full' style={{display: 'flex', justifyContent: 'end'}}>
      <Search onSearch={handleSearch}/>
      <Button className='AddBookbtn' ><NavLink to="/AddGame" style={{color:'white', backgroundColor: '#10195d'}}>Add Game</NavLink></Button>
      </div>
      <div className='book-container'>
          <Row lg={3}>
            {games.map((game, i) => (
              <Col className='d-flex mw-100 w-20 mx-auto mb-3'>
                <li key={i}>
                  <SingleGame game={game} className="flex-fill" />
                </li>
              </Col>
            ))}
          </Row>
      </div>

      <div className='mx-auto mw-100 d-flex' style={{ justifyContent: 'center' }}>
        <Pagination>
          <Pagination.Prev onClick={() => setCurrentPage(1)}/>
          {/* <Pagination.Ellipsis onClick={() => setCurrentPage(currentPage - 1)} />
          <Pagination.Item onClick={() => setCurrentPage(3)}>{3}</Pagination.Item>
          <Pagination.Item onClick={() => setCurrentPage(4)}>{4}</Pagination.Item>
          <Pagination.Item onClick={() => setCurrentPage(5)}>{5}</Pagination.Item>
          <Pagination.Ellipsis onClick={() => setCurrentPage(currentPage + 1)} /> */}
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        </Pagination>
      </div>
    </div>
  );
}

export default AllBooks;