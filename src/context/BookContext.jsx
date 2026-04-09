import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  // ✅ State initialization
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  // ✅ Load data from localStorage on first render
  useEffect(() => {
    const readListFromStorage = JSON.parse(localStorage.getItem("readList")) || [];
    const wishListFromStorage = JSON.parse(localStorage.getItem("wishList")) || [];

    setReadList(readListFromStorage);
    setWishList(wishListFromStorage);
  }, []);

  // ✅ Save readList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(readList));
  }, [readList]);

  // ✅ Save wishList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  // ✅ Add a book to Read List
  const handleMarkAsRead = (currentBook) => {
    // Prevent duplicates
    const isExistBook = readList.find(book => book.bookId === currentBook.bookId);
    if (isExistBook) {
      toast.error("The book is already marked as read!");
      return;
    }

    const newBookList = [...readList, currentBook];
    setReadList(newBookList);
    toast.success(`${currentBook.bookName} added to Read List`);

    // Optional: remove from wishlist if already there
    const updatedWishList = wishList.filter(book => book.bookId !== currentBook.bookId);
    setWishList(updatedWishList);
  };

  // ✅ Add a book to Wishlist
  const handleWishList = (currentBook) => {
    // Prevent duplicates in Read List
    const isExistInReadList = readList.find(book => book.bookId === currentBook.bookId);
    if (isExistInReadList) {
      toast.error("This book is already in Read List");
      return;
    }

    // Prevent duplicates in Wishlist
    const isExistInWishList = wishList.find(book => book.bookId === currentBook.bookId);
    if (isExistInWishList) {
      toast.error("This book is already in Wishlist");
      return;
    }

    setWishList([...wishList, currentBook]);
    toast.success(`${currentBook.bookName} added to Wishlist`);
  };

  return (
    <BookContext.Provider
      value={{
        readList,
        setReadList,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;