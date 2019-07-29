import React from 'react';
import Img from 'react-image';
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";

const Index = () => (
    
    <div class="container-fluid">
      <Navbar/>
      <img src="http://cdn.strategyonline.ca/wp/wp-content/uploads/2015/12/shutterstock_253684528.jpg?73961c" class="img-fluid" alt="Responsive image"/>
      <div class="media">
  <img class="align-self-start mr-3" src="..." alt="Generic placeholder image"/>
  <div class="media-body">
    <h5 class="mt-0">Top-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
<Footer/>
  </div>
 
);

export default Index;