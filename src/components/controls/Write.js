import React, {Component} from 'react';

class Write extends Component{
  render(){
    console.log("Write")
    return(
      <div>
        write
        <form action="/write" method="post"
          onSubmit={function(e){
            e.preventDefault();
            let _title = e.target.title.value,
                _content = e.target.content.value;

            if(_title === "" || _title === null){
              alert("Please put the title");
            }else if(_content === "" || _content === null){
              alert("Please put the content.");
            }else{
            this.props.onSubmit(_title, _content);}
          }.bind(this)}
          >
          <p>
          <input name="title" type="text" placeholder="title"></input>
          </p>

          <p>
          <textarea name="content" placeholder="content"></textarea>
          </p>

          <p>
          <input type="submit"></input>
          </p>
        </form>
      </div>
    )
  }
}

export default Write;
