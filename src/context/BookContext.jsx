import React , {createContext ,useState} from 'react';
import { v1 as uuidv1 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books ,setBooks] = useState([
      {title:"The Boy who harnessed the wind" ,author: "John Smith" ,id:1},
      {title:"Never Give Up" , author:"Wole Soyinka" ,id:2},
      {title:"Rich Dad,Poor Dad" , author:"Kevin Szn", id:3},
      {title:"The Journey Of Life" , author:"Cz Oscar", id:4}
  ])

  const addBook = (title,author,id) => {
      setBooks([...books ,{title:title ,author:author ,id:uuidv1()}])
  }


   const deleteBook = (id) => {
       setBooks(books.filter((book) => {
           return book.id !== id
       }))
   }

    return ( 
        <BookContext.Provider value={{ books , addBook , deleteBook}}>
          {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;