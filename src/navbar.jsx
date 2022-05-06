import React ,{useContext} from 'react';
import { BookContext } from './context/BookContext';


const NavBar = () => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
         <h1>Hello Friend,you have got {books.length} 📚 books to go through :)...</h1>
     ) :(
         <h2>No Books Available to read</h2>
     );
}
 
export default NavBar
;
 