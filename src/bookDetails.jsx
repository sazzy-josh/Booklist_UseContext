import React , { useContext } from 'react';
import { BookContext } from './context/BookContext';

const BookDetails = ({books}) => {
    const {deleteBook} = useContext(BookContext)
    return ( 
        <div onClick={ () => deleteBook(books.id) }>
            <p >{books.title}</p> -{books.author}
        </div>
     );
}
 
export default BookDetails;