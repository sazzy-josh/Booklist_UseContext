import React ,{useContext} from 'react';
import { BookContext } from './context/BookContext';
import BookDetails from './bookDetails';

const Booklist = () => {
 const {books} = useContext(BookContext)
    return ( 
         books.map((book) => {
           return <BookDetails books={book} key={book.id} />
         })
     );
}
 
export default Booklist;

