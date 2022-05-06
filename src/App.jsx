import { useState } from 'react'
import AddBooks from './addBook'
import './App.css'
import Booklist from './booklist'
import BookContextProvider from './context/BookContext'
import NavBar from './navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BookContextProvider>
         <NavBar />
         <Booklist />
         <AddBooks />
      </BookContextProvider>
    </div>
  )
}

export default App
