import { useEffect, useState } from 'react'
import './App.css'
import Board from './pages/Board'
import { useDispatch, useSelector } from 'react-redux'
import { addName } from './redux/userSlice'
import Header from './components/Header'

function App() {

  const userName = useSelector((state) => state.user.name)
  const dispatch = useDispatch()

  useEffect(() => {
    const getName = () => {
      if(userName===""){
        const uname = prompt('Please, insert your Name')
        if(uname != ""){
          dispatch(addName(uname))
        }
      } 
    }
    getName()
  },[dispatch])

  return (
    <>
      <Header />
      <Board />
    </>
  )
}

export default App
