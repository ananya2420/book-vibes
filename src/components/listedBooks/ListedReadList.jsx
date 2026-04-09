import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext';
import BookCard from '../UI/BookCard';


const ListedReadList = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks, wishList, "bookContext");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          storedBooks?.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default ListedReadList;