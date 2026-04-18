import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  return 
  <> 
   <form className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input type = 'text' id ='item'></input>
    </div>
    <button className='addbtn'>Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className='list'>

  <ul/>
  </>


}