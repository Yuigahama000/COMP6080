import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

//传参的时候没有带大括号(大括号是用来进行解构的,分别传进去而不是只传入到第一个里面)
//关于返回和html标签的混乱使用
export default function App() {
  const [text, setText] = useState('Hello');

  function handleClick() {
    setText(text === 'Hello' ? 'World!':"Hello")
  }
  return (
    <>
      <h1>Click then see the difference!</h1>
      <MyButton text = {text} onClick = {handleClick}/>
    </>
  )
}
function MyButton({text, onClick}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

