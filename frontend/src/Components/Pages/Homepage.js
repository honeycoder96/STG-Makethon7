import React, { Component, useState } from 'react';
import '../style.css';
import Landing from '../../images/landing.jpg';
import Card1 from '../../images/card1.jpg';
import Card2 from '../../images/card2.png';


//material ui component

const Homepage = () => {

   return (

<div>

  
   <br>
   </br>
<div class="jumbotron">

  <div class="container-fluid text-center px-0">
    
  <img src={Landing} alt="placeholder 1500" class="img-responsive" object-fit="cover"></img>
    <h1> Campaign Monitoring</h1>     
    <p>Welcome to the page</p>
    <button type="button" class="btn btn-primary">Know More </button>
  </div>
</div>

<div class="row">
  <div class="column">
  <div class="card">
  <img class="card-img-top" src={Card1} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

   </div>
</div>

<div class="column">
  <div class="card">
  <img class="card-img-top" src={Card2} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

   </div>
</div>
  
<div class="column">
  <div class="card">
  <img class="card-img-top" src={Card1} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

   </div>
</div>
  
  
</div>
<footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer>
</div>

    
   );
};

export default Homepage;
