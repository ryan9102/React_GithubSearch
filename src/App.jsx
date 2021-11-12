import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {

  state={
    users:[],
    isLoading:false,
    isFirst:true,
    errorMsg:''
  }

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState ={this.updateAppState}/>
        <List {...this.state}/>
      </div>
        )
      }
    }
