import { useEffect, useState } from 'react'
import './App.css'
import Board from './pages/Board'
import { useDispatch, useSelector } from 'react-redux'
import { addName } from './redux/userSlice'
import Header from './components/Header'
import Swal from 'sweetalert2'

function App() {

  const userName = useSelector((state) => state.user.name)
  const dispatch = useDispatch()

  useEffect(() => {
    const getName = async() => {
      if(userName===""){
        const {value: uname} = await Swal.fire({
          input: "text",
          inputLabel: "Please, enter your name",
          inputPlaceholder: "Example: Ricardo Lopez"
        });
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
