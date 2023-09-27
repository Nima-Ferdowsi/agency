import React from 'react'
import styled from "styled-components";

const Container = styled.div`
position: fixed;
bottom: 28px;
left: 19px;
background: #803bec;
padding: 10px;
border-radius: 5px;
color:white;
cursor: pointer;`;

const BookCallFloat = () => {
  return (
    <Container>Book a call</Container>
  )
}

export default BookCallFloat