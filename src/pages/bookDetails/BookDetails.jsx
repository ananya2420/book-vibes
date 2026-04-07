import { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';
// import your context if you have one
// import { BookContext } from 'path-to-context';

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find(book => book.bookId === Number(bookParamsId));

  if (!expectedBook) {
    return <p className="text-center mt-10 text-xl">Book not found!</p>;
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = expectedBook;


 const {handleMarkAsRead,storeBooks}=useContext(BookContext);
     console.log(handleMarkAsRead,storeBooks,"bookContext")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-100 shadow-md container mx-auto my-24 p-6 rounded-xl">
      
      {/* Book Image */}
      <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl p-4">
        <img
          src={image}
          alt={bookName}
          className="h-[400px] w-[400px] object-cover rounded-lg"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body space-y-4">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <h3 className="text-xl text-gray-700 font-medium">{author}</h3>

        <p className="py-2 border-y border-gray-300 text-gray-600">{category}</p>
        <p className="text-gray-700">Review: {review}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {Array.isArray(tags) &&
            tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </div>
            ))
          }
        </div>

        {/* Book Info */}
        <div className="border-t border-gray-300 pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Number of pages</span>
            <span className="text-gray-600">{totalPages}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Publisher:</span>
            <span className="text-gray-600">{publisher}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Publisher year:</span>
            <span className="text-gray-600">{yearOfPublishing}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button
              className="btn"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button className="btn btn-primary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;