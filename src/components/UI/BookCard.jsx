import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';


const BookCard = ({book}) => {
  return (
    <div>
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
         
            <img
              src={book.image}
              alt={book.bookName}
              className="h-[250px] w-full object-cover"/>
          
          <div className="card-body space-y-3">

          <div className="flex flex-wrap gap-2">
          {Array.isArray(book?.tags) &&
           book.tags.map((tag, index) => (
          <div key={index} className="badge bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full">
          {tag}
          </div>
          ))
          }
          </div>

            <h2 className="card-title text-2xl font-bold">
             {book.bookName}
            </h2>

            <p className='font-medium text-gray-600'>{book.author}</p>

            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-base">
              <div className="font-semibold text-gray-700">{book.category}</div>
              <div className="flex gap-1 items-center text-yellow-500 font-semibold">
                {book.rating} <FaRegStar />
              </div>
            </div>

          </div>
        </Link>
    </div>
  )
}

export default BookCard