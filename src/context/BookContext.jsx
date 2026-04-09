import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const readList = JSON.parse(localStorage.getItem("readList")) || [];
    const wish = JSON.parse(localStorage.getItem("wishList")) || [];

    setStoredBooks(readList);
    setWishList(wish);
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(storedBooks));
  }, [storedBooks]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  // ✅ Add to Read List
  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      book => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("The book is already marked as read!");
      return;
    }

    setStoredBooks([...storedBooks, currentBook]);
    toast.success(`${currentBook.bookName} added to Read List`);
  };

  // ✅ Add to Wishlist
  const handleWishList = (currentBook) => {

    const isExistInReadList = storedBooks.find(
      book => book.bookId === currentBook.bookId
    );

    if (isExistInReadList) {
      toast.error("Already in Read List");
      return;
    }

    const isExistBook = wishList.find(
      book => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("Already in Wishlist");
      return;
    }

    setWishList([...wishList, currentBook]);
    toast.success(`${currentBook.bookName} added to Wishlist`);
  };

  return (
    <BookContext.Provider
      value={{
        storedBooks,
        handleMarkAsRead,
        wishList,
        handleWishList
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;