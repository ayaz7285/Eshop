// import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import About from './About'
// import Contact from './Contact'
// import Home from './Home'
// import Login from './Login'

// class Navbar extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <Link to='/'>Home</Link>
//                     <Link to='/about'>About</Link>
//                     <Link to='/contact'>Contact Us</Link>
//                     <Link to='/login'>Login</Link>
                    
//                 </div>
//                 <Routes>
//                     <Route path='/' element = {<Home/>}/>
//                     <Route path='/about' element = {<About/>}/>
//                     <Route path='/contact' element = {<Contact/>}/>
//                     <Route path='/login' element = {<Login/>}/>
//                 </Routes>
                

                

//             </Router>
            
//         )
//     }
// }

// export default Navbar






// import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

// class Header extends Component {
//     render() {
//         return (
//             <Navbar bg="light" expand="lg">
//             <Container fluid style={{paddingBottom:"1vh",paddingTop:"1vh",backgroundColor:"#242582"}}>
//               <Navbar.Brand href="/"><b style={{color:"white"}}>E-Shop</b></Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarScroll" />
//               <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                   className="me-auto my-2 my-lg-0"
//                   style={{ maxHeight: '200px'}}
//                   navbarScroll
//                 >
//                   <Nav.Link href="/Products" style = {{color:"white"}}>Products</Nav.Link>
//                   <Nav.Link href="/Login" style = {{color:"white"}}>Login</Nav.Link>
//                   <Nav.Link href="/Cart"  style={{color:"white"}}  disabled >Cart</Nav.Link>
//                   <Nav.Link href="/AboutUs" style={{color:"white"}}>About Us</Nav.Link>
//                 </Nav>
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         )
//     }
// }

// export default Header

///////////////////////////////////////////////////

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style={{width:"100%"}}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:""
    }
  }
  enterName = (event)=>{
    this.setState({name:event.target.value})
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:"#757bc8"}} expand="lg">
             <Container fluid>
               <Navbar.Brand><Link to="/" style={{color:"white",textDecoration:"none",fontWeight:"bold"}}>E-Shop</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '200px' }}
                  navbarScroll
                >
                  <Nav.Link><Link to="/products" style={{color:"white",textDecoration:"none"}}>   Products   </Link></Nav.Link>
                  <Nav.Link ><Link to="/aboutUs" style={{color:"white",textDecoration:"none"}}>   About Us   </Link></Nav.Link>
                  <Nav.Link><Link to="/login" style={{color:"white",textDecoration:"none"}}>   Login   </Link></Nav.Link>
                  <Nav.Link><Link to="/cart" style={{color:"white",textDecoration:"none"}}>   Cart   </Link></Nav.Link>
                  <Nav.Link><Link to="/profile" style={{color:"white",textDecoration:"none"}}>   Profile   </Link></Nav.Link>
                  <Nav.Link><Link to="/sellerProfile" style={{color:"white",textDecoration:"none"}}>   Sell   </Link></Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={this.enterName}
                    value={this.state.name}
                  />
                  <Button variant="outline-success" style={{color:"white",borderColor:"white"}}>
                    <Link to={`/product/${this.state.name}`} style={{textDecoration:"none",color:"white"}}>Search</Link>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// import * as React from 'react';
// import {useState} from 'react';
// import PropTypes from 'prop-types';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Zoom from '@mui/material/Zoom';
// import {Link} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';


// function ScrollTop(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       '#back-to-top-anchor',
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//       });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };



// export default function BackToTop(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//         <Navbar style={{backgroundColor:"#757bc8"}} expand="lg">
//             <Container fluid>
//               <Navbar.Brand><Link to="/" style={{color:"white",textDecoration:"none",fontWeight:"bold"}}>E-Shop</Link></Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarScroll" />
//               <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                   className="me-auto my-2 my-lg-0"
//                   style={{ maxHeight: '200px' }}
//                   navbarScroll
//                 >
//                   <Nav.Link><Link to="/products" style={{color:"white",textDecoration:"none"}}>   Products   </Link></Nav.Link>
//                   <Nav.Link ><Link to="/aboutUs" style={{color:"white",textDecoration:"none"}}>   About Us   </Link></Nav.Link>
//                   <Nav.Link><Link to="/login" style={{color:"white",textDecoration:"none"}}>   Login   </Link></Nav.Link>
//                 </Nav>
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success" style={{color:"white",borderColor:"white"}}>Search</Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Container>
//         </Navbar>
//       {/* <Toolbar id="back-to-top-anchor" />
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop> */}
//     </React.Fragment>
//   );
// }

///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
{/* <Toolbar>
           <MenuIcon
              sx={{display:{xs:'block',sm:'none'},marginRight:'5px'}}
              onClick={toggleHamburger}
           />

            <div style={{display:{hamburgerOpen},width:"100%"}}>
                  <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Login</li>
                  </ul>
            </div>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, border:"2px solid black"}}
          >
            <Link to="/" style={{color:"white",textDecoration:"none"}}>   E-Shop   </Link>
          </Typography>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <Link to="/products" style={{color:"white",textDecoration:"none"}}>   Products   </Link>
          </Typography>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <Link to="/aboutUs" style={{color:"white",textDecoration:"none"}}>   About Us   </Link>
          </Typography>


          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{color:"white"}}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <Link to="/login" style={{color:"white",textDecoration:"none"}}>   Login   </Link>
      
          {/* </Typography> */}
        //   </Typography>
        //   <Search>
        //     <SearchIconWrapper>
        //       <SearchIcon />
        //     </SearchIconWrapper>
        //     <StyledInputBase
        //       placeholder="Search…"
        //       inputProps={{ 'aria-label': 'search' }}
        //     />
        //   </Search>
        // </Toolbar> */}
