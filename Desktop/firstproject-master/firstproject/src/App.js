//创建组件
import React, { Component } from 'react';
import Nav from './api/Nav'
import Content from './pages/Content/index'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='nav'>  <Nav /> 
        </div>
        <div className='content'>
               <Content/>
        </div>
      </div>
    )
  }
} 
