import React, {Component} from 'react';

class Nav extends Component {
  shouldComponentUpdate(newProps){
    return newProps.data !== this.props.data;
  }
  render(){
    console.log("Nav")
    let menus = [];
    let idxarr = this.props.index;
    let datas = this.props.data;

    function idChk(id){
      var find = idxarr.find(item => item === id)
      return find;
    }

    datas.forEach(data =>
      menus.push(
        <li key={data.id}>
          <a
            href={"/content/" + data.id}
            onClick={function(e){
              e.preventDefault();
              if(data.id !== idChk(data.id)){
                idxarr.push(data.id);
              }else{
                idxarr.splice(idxarr.indexOf(data.id),1);
              }
              this.props.addNav(idxarr);
            }.bind(this)}
          >
            {data.title}
          </a>
        </li>)
    )

    return(
      <nav>
        <div>Contents</div>
        <ul>
          {menus}
        </ul>
      </nav>
    )
  }
}

export default Nav;
