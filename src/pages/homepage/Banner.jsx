import React from 'react'
import bookImg from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <nav className='hero bg-base-200 min-h-[70vh] rounded-2xl my-8'>
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={bookImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your book shelf</h1>
      
      <button className="btn btn-primary mt-4">View the List</button>
    </div>
  </div>
</div>
    </nav>
  )
}

export default Banner