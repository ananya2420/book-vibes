import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../UI/BookCard';

const ListedWishList = () => {
  const { wishList } = useContext(BookContext); // only need wishList
  console.log(wishList, "bookContext");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishList?.length === 0 ? (
          <p className="text-center col-span-full">No books in Wishlist</p>
        ) : (
          wishList.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListedWishList;