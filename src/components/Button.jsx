import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
border: none;
border-radius: 10px;
height: 40px;
width: 100px;
margin: 1rem;
color: #FFFFFF;
background-color: #4e6279;
box-shadow: 0 3px 0px 0px #283747;
transition: all 0.1s;
}
&:active {
    transform: translateY(3px);
    box-shadow: none;
}
`;

const Button = ({ func, wording }) => (
  <StyledButton type="button" onClick={func}>
    {wording}
  </StyledButton>
);

Button.propTypes = {
  func: PropTypes.func.isRequired,
  wording: PropTypes.string.isRequired,
};

export default Button;
