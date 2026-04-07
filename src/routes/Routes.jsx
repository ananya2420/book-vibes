import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorpage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router=createBrowserRouter([
  {
  path:"/",
  Component: MainLayout ,
  children:[
    {
      index:true,
      element:<HomePage />
    },
    {
      path:"/books",
      element:<Books />
    },
{
  path:"books",
  element:"books"
},
{
  path:"bookDetails/:bookId",
  Component:BookDetails,
  loader:()=>fetch('/booksData.json')
}
],
    errorElement:<ErrorPage />,
  }
])