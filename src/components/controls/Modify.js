import React, { Component } from 'react';

class Modify extends Component{
  state = {
    title: this.props.data.title,
    content: this.props.data.body
  }

  formChanger = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  vaildation = (e) => {
    e.preventDefault();
    let _title = e.target.title.value,
        _content = e.target.content.value;

    if(_title === "" || _title === null){
      alert("change the title");
    }else if(_content === "" || _content === null){
      alert("change the content.");
    }else{
      this.props.onSubmit(_title, _content);
    }
  }

  cancle = (e) =>{
    e.preventDefault();
    this.props.onClick(0);
  }

  render(){
    return(
      <div>
        modify
        <form action="/modify" method="post"
          onSubmit={this.vaildation}
          >
          <p>
          <input
            name="title"
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.formChanger}
            ></input>
          </p>

          <p>
          <textarea
            name="content"
            placeholder="content"
            value={this.state.content}
            onChange={this.formChanger}
            ></textarea>
          </p>

          <p>
          <input type="submit"></input>
          <button onClick={this.cancle}>취소</button>
          </p>
        </form>
      </div>
    )
  }
}

export default Modify;
