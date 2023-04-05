import React from 'react'
import './Head.scss';
export default function Head() {
  return (
    <div className="head_box">
      <div className='logo'>
        todo
      </div>
      <div className='head_item'>
        <span>隐藏</span>
        <span>缩小/放大</span>
        <span className='close'>关闭</span>
      </div>
    </div>
  )
}
