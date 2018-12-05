import React from 'react';
import './Slider.css';

export default props => {

  var style1 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1536917802625-4427dfe13a91?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbc0f570acf0b45569a972c396c6bcbe&auto=format&fit=crop&w=1890&q=80")'
  }

  var style2 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1536286053831-52e1354eb5b7?ixlib=rb-0.3.5&s=5853d66c8f74e20f8e29eac13ec044a8&auto=format&fit=crop&w=1350&q=80")'
  }

  var style3 = {
    backgroundImage: 'url("https://source.unsplash.com/szFUQoyvrxM/1920x1080")'
  }

  return (

  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    
    <div className="carousel-inner" role="listbox"> 
      <div className="carousel-item active" style={style1}>
        <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4">First Slide</h2>
          <p className="lead">This is a description for the first slide.</p>
        </div>
      </div>
     
      <div className="carousel-item" style={style2}>
        <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4">Second Slide</h2>
          <p className="lead">This is a description for the second slide.</p>
        </div>
      </div>
      
      <div className="carousel-item" style={style3}>
        <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4">Third Slide</h2>
          <p className="lead">This is a description for the third slide.</p>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

  </div>

  
  );
}