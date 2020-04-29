import React, {Component} from 'react';
import styled from 'styled-components';

class Header extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render(){
    console.log("Header");
    return(
      <S_header>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </S_header>
    )
  }
}

const S_header = styled.div`
  width: 100%;
  padding: 1em 0em;
  text-align: center;
  background: #fff;
  & h1{
    font-size: 2rem;
  }
  & p{
    font-size: 1em;
  }
  & :hover{
    color: #00e;
  }
`;

export default Header;
