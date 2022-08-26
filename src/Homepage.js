import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

export default class Homepage extends Component {
    render() {
      return (
         <>
          <Navbar />
          <Container
        style={{backgroundColor: 'yellow' ,display: 'block',
        width: 300, padding: 30
        }}
      >
            <Login />
            </Container>
          
       </>  
      
      )
    }
  }