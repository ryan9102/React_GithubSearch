import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

search = ()=>{
  const {keyWord} = this
  axios.get(`https://api.github.com/search/users?q=${keyWord.value}`).then(
    response => {console.log('成功了', response.data);
  this.props.saveUsers(response.data.items)},
    error=> {console.log('失败了',error)}
  )
}

    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={c => this.keyWord = c} type="text" placeholder="enter the name you search"/>&nbsp;
              <button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
