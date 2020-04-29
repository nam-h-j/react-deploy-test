import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

class Controls extends Component{
  render(){
    console.log("controls")
    return(
      <Fragment>
        <Button
          onClick={function(e){
            e.preventDefault();
            this.props.getControls(1);
          }.bind(this)}
          >Write
        </Button>
      </Fragment>
    )
  }
}

const Button = styled.button`
  padding: .5em 2em;
  font-weight: bold;
  font-size: 1em;
  color: #fff;
  background: #aaaaaa;
  &:hover{
    background: #0000ee;
  }
`


export default Controls;
