import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    

    render() {
      const {users,isLoading,isFirst,errorMsg} = this.props
        return (
            <div className="row">
              {
                isFirst? <h1>Welcome</h1>:
                isLoading? <h1>Loading...</h1>:
                errorMsg? <h1>{errorMsg}</h1>:
                users.map((userObj,index)=>{
                  return (
                  <div className="card" key={index}>
                      <a href={userObj.html_url} rel="noreferrer" target="_blank">
                        <img src={userObj.avatar_url} alt= 'avatar'style={{width:'100px'}}/>
                      </a>
                      <p className="card-text">{userObj.login} </p>
                    </div>
                        )
                  })
              }
            </div>
          )
        }
  } 


