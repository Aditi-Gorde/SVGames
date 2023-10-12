//Home Page

import * as React from 'react/jsx-runtime';
import ReactDOM from 'react-dom';
import '../assets/Home.style.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
        <div className='mainDiv'>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:'rgb(164 175 181)'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:'#10195d'}}><strong>Get Started</strong></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>        
          Explore the world of gaming on our website, where you'll find a rich database of video games. Discover your favorite titles. <br /> <br /> Dive into the stories behind the games and connect with a thriving gaming community. Stay informed about the latest releases and industry news. <br /> <br /> Your gaming journey starts here, with a wealth of information and a passionate community of fellow gamers. <br /> <br />

          <Button variant="secondary" style={{backgroundColor:'#10195d',color:'white'}} onClick={handleShow}>
            <Link to="/AllGames">All Games</Link>
          </Button>

          <Button variant="secondary" style={{backgroundColor:'#10195d',color:'white'}} onClick={handleShow}>
            <Link to="/About">About Us</Link>
          </Button>

        </Offcanvas.Body>
      </Offcanvas>


            <div className="container div1 " >
              
              <div className="text" style={{backgroundColor:'rgb(164 175 181)'}}>
              <h2 className='homeH2'><strong>Welcome to SVGAMES </strong></h2>
              <p>
                Unlock gaming's secrets with our comprehensive website featuring game details, authors, and release dates. "Your gaming hub for detailed game information, connecting gamers worldwide."</p>
              <Button variant="secondary" style={{backgroundColor:'#10195d',color:'white'}} onClick={handleShow}>
                Get Started
              </Button>
              </div>
            </div>


<section id="about" style={{paddingTop:'3rem'}}>
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-8">
            <div class="image-holder">
              <img src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="single" class="single-image img-fluid" style={{height:'28rem', width:'36rem',}} />
            </div>
          </div>
          <div style={{backgroundColor:'rgb(164 175 181)'}} class="about-content bg-gray col-lg-4 m-auto top-0 end-0 bottom-0">
            <h3 class="py-3" >Who are we</h3>
            <p >"We are SVGames, a dedicated team of gamers and enthusiasts. Our mission is to provide the ultimate resource for gamers, offering a treasure trove of information about video games.With a passion for gaming, we bring you the latest updatesand insights. Our community of fellow gamers is at the heart of what we do.Join us on our quest to explore the gaming universe, connect with like-minded players, and embark on endless gaming adventures.
            </p>
            <NavLink to="/About" class="btn" style={{color:'black'}}>About us →</NavLink>
          </div>
        </div>
      </div>
    </section>
        </div>
           
  )
}
