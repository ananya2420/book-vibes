import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../UI/BookCard';

const ListedWishList = ({sortingType}) => {
  const { wishList } = useContext(BookContext); // only need wishList
  console.log(wishList, "bookContext");

  const [filteredWishList,setFilteredWishList]=useState(wishList)
  
  useEffect(()=>{
     if(sortingType){
      if(sortingType==='pages'){
            const sortedData=[...wishList].sort((a,b)=>a.totalPages-b.totalPages)
            console.log(sortedData);
            setFilteredWishList(sortedData);
      }else if(sortingType==='rating'){
            const sortedData=[...wishList].sort((a,b)=>a.rating-b.rating)
            console.log(sortedData);
            setFilteredWishList(sortedData);
      }
     }
  },[sortingType,wishList])

  if(filteredWishList.length===0){
    return <div className="h-[50vh] bg-gray-100flex items-centerjustify-center">
        <h2 className="font-bold text-3xl">no wishlist data found</h2>
    </div>
  }

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