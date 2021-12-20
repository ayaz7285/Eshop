import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
// import url1 from '../images/slide1.jpg'
// import url2 from '../images/slide2.jpg'
// import url3 from '../images/slide3.jpg'

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#DFE7FD",height:"fit-content"}}>
          <Carousel fade style={{width:"70%",margin:"auto",padding:"10vh"}}>
            <Carousel.Item>
              <img
                className="d-block "
                src="images/slide1.jpg"
                alt="First slide"
                height="500vh"
                width="100%"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src='images/slide2.jpg'
                alt="Second slide"
                height="500vh"
                width="100%"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src='images/slide3.jpg'
                alt="Third slide"
                height="500vh"
                width="100%"
              />
            </Carousel.Item>
          </Carousel>
          <h3 style={{paddingBottom:"30px"}}><Link to="/products" style={{textDecoration:"none"}}> Explore More </Link> </h3>
      </div>
    )
  }
}

export default Home
