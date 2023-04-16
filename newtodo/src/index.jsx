import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css'
import List from './List'

export default class App extends React.Component {
  state = {
    items:[],
    text:""
}
  handleChange =e=>{
    this.setState({text:e.target.value})
  }
  handleAdd = (e) =>{
    if(this.state.text !== ""){
      const item = [...this.state.items, this.state.text];
      this.setState({items:item,text:""});
    }
  }
  handleDelete = (id)=>{
    const oldItems = [...this.state.items];
    const items = oldItems.filter((element, i)=>{
      return i !==id
  });
  this.setState({items:items})
  }
render(){
  return(
    <div className='container'>
      <div> <h1 style={{textAlign:'center'}}>this is to list..! </h1>
       <div style={{textAlign:'center'}}>
        <input type="text" placeholder="today's todo list" value={this.state.text} onChange={this.handleChange}/><button onClick={this.handleAdd}>submit</button></div>
        </div>
        <div>
          <div>

          <ul>
        {
          this.state.items.map((value, i)=>{
            return <List key={i} id={i} value={value} sendData={this.handleDelete}/>
          })
        }
          </ul></div>
        </div>
      
    </div>
  )
}
}

 
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );