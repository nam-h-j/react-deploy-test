import React, {Component} from 'react';

class Article extends Component {
  render(){
    let articles = [];
    let datas = this.props.data;
    let index = this.props.index;//index array

    for(let i = 0; i < index.length; i++){
      index.sort((a,b) => {return a-b;});
      let idx = i;
      articles.push(
        <content key={datas[idx].id}>
          <h1>{datas[idx].title}</h1>
          <p>{datas[idx].body}</p>
          <button onClick={function(e){
              e.preventDefault();
              this.props.modiBtn(2, datas[idx].id);
            }.bind(this)}
            >Modify</button>
          <button onClick={function(e){
              e.preventDefault();
              this.props.deleBtn(3, datas[idx].id);
            }.bind(this)}>Delete</button>
        </content>
      )
    }

    return(
      <article>
        {articles}
      </article>
    )
  }
}

export default Article;
