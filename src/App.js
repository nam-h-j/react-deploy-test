import React, {Component, Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Controls from './components/Controls';
import Write from './components/controls/Write';
import Modify from './components/controls/Modify';

const GlobalStyle = createGlobalStyle`
  body,h1,button,ul,li,a,p{
    margin: 0;
    padding: 0;
    list-style: none
  }
  form{
    & p{
        padding: .5em 0em;
    }
  }
  body{
    background: #eeeeee;
  }
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: [],
      idxNxtVal: 3,
      cntState: 0,
      modifyId: 0,
      header:{title:'react-todo', body:'create-react-app + styled-components'},
      articles : [
        {id:1, title:'menu1', body:'article body'},
        {id:2, title:'menu2', body:'article2 body'},
        {id:3, title:'menu3', body:'article3 body'}
      ]
    }
  }

  copyArticles(copied){
      return Array.from(copied);
  }

  getArticleIndex(arr, id){
    return arr.findIndex(e => e.id == id);
  }

  editorWrite(cntState){
    let editor = <Write
      onSubmit={function(_title, _content){
          let _idNxtVal = this.state.idxNxtVal + 1;
          let _articles = this.copyArticles(this.state.articles);
          _articles.push({id : _idNxtVal, title : _title, body : _content});
          this.setState({
            idxNxtVal :_idNxtVal,
            cntState : 0,
            articles : _articles
          });
          alert("No." + _idNxtVal + " article is ready.");
      }.bind(this)}></Write>
    return editor;
  };

  editorModify(cntState, modifyId){
    let modiIdx = this.getArticleIndex(this.state.articles, modifyId);
    console.log('modiidx'+modiIdx)
    let editor = <Modify
      data = {this.state.articles[modiIdx]}
      onSubmit = {function(_title, _content){
        let _articles = this.copyArticles(this.state.articles);
        _articles[modiIdx] = {id: modifyId, title:_title, body:_content};
        this.setState({
          cntState : 0,
          articles : _articles
        })
      }.bind(this)}
      onClick = {function(cntReset){
        this.setState({cntState : cntReset});
      }.bind(this)}>
    </Modify>
    return editor;
  }

  editorDelete(cntState, deleId){
    let deleIdx = this.getArticleIndex(this.state.articles, deleId),
        _articles = this.copyArticles(this.state.articles),
        idxArr = this.state.index,
        deleIdxArr = this.getArticleIndex(idxArr, deleId);

    _articles.splice(deleIdx, 1);
    idxArr.splice(deleIdxArr, 1);
    console.log(idxArr);
    this.setState({
      index: idxArr,
      cntState : 0,
      articles : _articles
    })
    console.log("삭제해부럿지롱!")
  };

  editorFunc(cntState, id){
    switch(cntState){
      case 1 : return this.editorWrite(cntState);
      case 2 : return this.editorModify(cntState, id);
      case 3 : return this.editorDelete(cntState, id);
      default : console.log("mode is 0");
    }
  }


  render(){
    console.log("AppRender");
    return (
      <Fragment>
        <GlobalStyle/>

        <Header
          title={this.state.header.title}
          body={this.state.header.body}
        ></Header>

        <Controls
          getControls={
            function(cntNum){
              this.setState({cntState : cntNum})
            }.bind(this)
          }></Controls>

        {this.editorFunc(this.state.cntState, this.state.modifyId)}

        <Nav
          index={this.state.index}
          data={this.state.articles}
          addNav={
            function(arr){
              this.setState({index : arr})
            }.bind(this)}
        ></Nav>

        <Article
          index={this.state.index}
          data={this.state.articles}
          modiBtn={
            function(cntNum, id){
              this.setState({
                cntState : cntNum,
                modifyId : id
              })
            }.bind(this)}
          deleBtn={
            function(cntNum, id){
              this.setState({
                cntState : cntNum,
                modifyId : id
              })
            }.bind(this)}
          ></Article>
      </Fragment>
    );
  }
}

export default App;
