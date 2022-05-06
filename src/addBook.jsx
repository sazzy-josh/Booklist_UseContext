import React , { useContext ,useState ,useEffect} from 'react';
import { BookContext } from './context/BookContext';

const  AddBooks = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pending ,setPending] = useState(false)

   const handleSubmit = (e) => {
    setPending(true)
    e.preventDefault()
    addBook(title,author)
    setTitle('')
    setAuthor('')
   }

   useEffect(() => {
    setTimeout(() => {
        setPending(false)
    },500)
   },[pending])

 
    
    return ( 
        <form onSubmit={ handleSubmit }>
            <input type="text" value={title} required onChange ={(e) => setTitle(e.target.value)} placeholder="Enter Name of Book"/>
            <input type="text" value={author} required onChange ={(e) => setAuthor(e.target.value)} placeholder="Enter Name of Author"/>
            {pending ? <input type="submit" disabled value="Adding Book..." /> :<input type="submit" value="Add Book" />}
        </form>
     );
}
 
export default  AddBooks;