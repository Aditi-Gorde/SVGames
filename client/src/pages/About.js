//About us

import React, { useState } from 'react';
import '../assets/About.style.css'
function About(){
    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
      setRating(starValue);
    };
    return (
        <>
        <section id="about" class="padding-medium">
        <h3 class=" heading" >Who are we</h3>
            <div class="container">
                 
                 <div class="row">
                    <div class="image-holder col-md-6 mb-3">
                        <img src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="single" class="img-fluid" />
                    </div>
                    <div class="image-holder col-md-6 mb-3">
                        <img src="https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="single" class="img-fluid" />
                    </div>          
                </div>
            <div>
                </div>
                </div>
 
          <p style={{padding:'0 2rem',textAlign:'justify'}}>Welcome to our all-inclusive video game haven! Our website is a gamer's paradise, offering a treasure trove of information about a multitude of video games. We provide a wealth of details, including the games' names, authors, URLs, and published dates.

Dive deep into the world of gaming as we introduce you to the brilliant minds behind your beloved titles. Uncover the developers, studios, and creative geniuses who've brought your favorite games to life.

With direct links to game websites, you'll always stay connected to the heart of your gaming adventures, from official sources to community hubs and more.

Track the evolution of games with their published dates, whether you're exploring retro classics or eagerly anticipating the latest releases.Navigate our user-friendly interface with ease and discover gaming gems, connect with like-minded players, and share your gaming experiences.

Stay in the know with our frequent updates, ensuring you're always informed about the latest game releases, industry news, and trends.</p>
    </section> <br /><br />

    <section id="newsletter" class="news-outer">
      <div class="container">
        <div class="newsletter">
          <div class="row">
            <div class="col-lg-6 col-md-12 title">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get latest news, updates and deals directly mailed to your inbox.</p> 				
            </div>
            <form class="col-lg-6 col-md-12 d-flex align-items-center">
              <div class="d-flex w-75 border-dark py-2">
                <button style={{color:'white'}} class="btn border-2 p-2" type="button" fdprocessedid="rjwr4l">Subscribe</button>
              </div>
            </form>
          </div> 			
        </div>
      </div>
    </section><br /><br />




            <div class="add-review margin-small">
                  <div className='rev-start'>
                        <h3 >Add a review</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <h4 class="my-2">Your rating *</h4>
                        <div>
                            {[1, 2, 3, 4, 5].map((starValue) => (
                            <span
                                key={starValue}
                                className={starValue <= rating ? 'star filled' : 'star'}
                                onClick={() => handleStarClick(starValue)}
                            >
                                &#9733;
                            </span>
                            ))}
                        </div>
                  </div>

                  <div className='rev-form'>
                  <form id="form">
                    <div class="py-3">
                      <label>Your Name *</label><br />
                      <input type="text" name="name" placeholder="Write your name here" class="rev_inp" />
                    </div>
                    <div class="py-3">
                      <label>Your Email *</label><br />
                      <input type="text" name="email" placeholder="Write your email here" class="rev_inp" />
                    </div>
                    <div class="py-3">
                      <label>Your Review *</label><br />
                      <textarea rows={5} className='rev_inp' placeholder="Write your review here" ></textarea>
                    </div>
                    <button type="submit" name="submit" class="btn sub my-3 rev_inp">Submit</button>
                  </form>
                  </div>
                </div>
        </>

    );
}

export default About;



