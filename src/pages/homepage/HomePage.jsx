import React from 'react'
import Banner from './Banner'
import AllBooks from './AllBooks'
import { BookContext } from '../../context/BookContext'

const HomePage = () => {

  

  return (
    <div>
        <Banner />
        <AllBooks />
    </div>
  )
}

export default HomePage