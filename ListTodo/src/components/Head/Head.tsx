import React from 'react'
import logo from '../../logo.svg'
import './Head.scss';
export default function Head() {
  return (
    <div className="head_box">
      <div className='logo'>
        todo
        <img src={logo} alt="" />
      </div>
      <div className='head_item'>
        <span>隐藏</span>
        <span>缩小/放大</span>
        <span className='close'>关闭</span>
      </div>
    </div>
  )
}
