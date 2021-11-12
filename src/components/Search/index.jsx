import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

search = ()=>{
  const {keyWord} = this
  this.props.updateAppState({isLoading:true, isFirst:false})
  axios.get(`https://api.github.com/search/users?q=${keyWord.value}`).then(
    response => {console.log('成功了', response.data);
  this.props.updateAppState({isLoading:false, users:response.data.items})
},
    error=> {console.log('失败了',error);
    this.props.updateAppState({isLoading:false, errorMsg:error.message})
    }
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
