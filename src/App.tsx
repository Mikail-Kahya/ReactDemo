//import { useState } from 'react'
//import heroImg from './assets/hero.png'
import './reset.css'
import './style.css'

export default function App() {
  return <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="task">New item</label>
        <input type="text" name="task" id="task" />
      </div>
      <button className="btn">Add</button>
    </form>;
    <h1 className="header">Todo List</h1>
    <ul className='list'>
      <li>
        <label>
          <input type="checkbox"/>
          item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </> 
}
