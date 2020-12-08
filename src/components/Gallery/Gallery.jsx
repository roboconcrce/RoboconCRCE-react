import React from 'react';
import './gallery.css';
import logo from '../../assets/img/gallery/1.jpg';

import GalleryImage from './GalleryImage';


function Gallery() {
  return (
    <div className="Gallery">

    
      <div class="container">
        <h2 style={{textAlign:"center",color:"gray"}}>GALLERY</h2>
        <div id="myCarousel" class="carousel " data-ride="carousel">
          
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            {/* <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li> */}
          </ol>

          
          <div class="carousel-inner"  role="listbox"  style={{alignContent:"center"}}>
            
            <div class="item active">
              <GalleryImage/>
            </div>

            <div class="item">
                <GalleryImage/>

            </div>
          
            {/* <div class="item">
              <img src={logo} alt="logo" width="460" height="100"/>
            </div>

            <div class="item">
              <img src={logo} alt="logo" width="460" height="100"/>
            </div> */}
          </div> 

        
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="icon-next" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>

        </div>
      </div>
</div>

    

  );
}

export default Gallery;
