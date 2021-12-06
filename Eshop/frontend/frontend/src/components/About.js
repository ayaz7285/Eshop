import React, { Component } from 'react'
import Paper from '@mui/material/Paper';
import { Container,Row,Col } from 'react-bootstrap';
//import url from '../images/Capture.PNG'
//import profilePic from '../images/Ayaz-photo2.jpg'
class About extends Component {
    render() {
        return (
            <div>
                <Paper elevation={4} style={{width:"75%",margin:"10px auto",height:"fit-Content"}}>
                <h1 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold",margin:"10px"}}>About the website</h1>
                <Container style={{margin:"5px"}}>
                    <Row>
                        <Col xs={8} md={10} lg={10}>
                <p style={{paddingLeft:"10px",textAlign:"left",fontSize:"20px"}}>This is an Ecommerce website. This website was created by Ayaz Sarwar. This website is built
                using MERN stack. This website was made as an assignment during intership at Your Engineer.
                </p>
                <h4 style={{textAlign:"left",paddingLeft:"17px",fontWeight:"bold"}}>Some features of the website are:</h4>
                <ul style={{textAlign:"left"}}>
                    <li>It is a single page Application made using React</li>
                    <li>A user can Login to his existing account, create a new account or log out from his account</li>
                    <li>Validation process is done for both Login and Register forms</li>
                    <li>The cart option is only shown when a user is Logged in. Add to cart function works only when the user is logged in</li>
                    <li>If user is not logged in then the "Add to cart" option will redirect to the Login page</li>
                    <li>The cart page shows all the products present in the cart of the user. It also shows the total bill for that user.</li>
                </ul>
                </Col>
                <Col xs={4} md={2} lg={2}>
                <img src="images/Capture.PNG" style={{heigth:"200px",width:"100%",padding:"5px"}}/>
                </Col>
                </Row>
                </Container>
                <h1 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>About the Creator</h1>
                <Container style={{margin:"5px"}}>
                    <Row>
                        <Col xs={8} md={10} lg={10}>
                <ul style={{textAlign:"left"}}>
                    <li>Name: Ayaz Sarwar</li>
                    <li>Education: Third year student at Indian Institute of Technology (BHU) Varanasi</li>
                    <li>Hobbies and Intrests: Web Development, Sketching and Watching Anime</li>
                    <li>Date of Birth: 3rd September 2001</li>
                    <li>Address: 111B Sector 6, Ukkunagram, Visakhapatnam, Andhra Pradesh (530032)</li>
                    <li>Contact No.: 8374104891</li>
                    <li>Email: ayaz.3.sarwarchem@gmail.com</li>
                    <li>Github Profile: <a href="https://github.com/ayaz7285" target="_blank">Click Here</a></li>
                    <li>LinkedIn Profile: <a href="https://www.linkedin.com/in/ayaz-sarwar-68397a1b4/" target="_blank">Click Here</a></li>
                </ul>
                </Col>
                <Col xs={4} md={2} lg={2}>
                <img src='images/Ayaz-photo2.jpg' style={{heigth:"200px",width:"100%",padding:"5px"}}/>
                </Col>
                </Row>
                </Container>
                </Paper>
            </div>
        )
    }
}

export default About
