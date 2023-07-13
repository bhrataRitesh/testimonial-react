import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Testimonials = (props) => {
    let reviews = props.reviews;
    let [index, setIndex] = useState(0);
    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    function rightShiftHandler() {
        if (index+1 > reviews.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }
    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * reviews.length));
    }
  return (
      <div className='vw-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
          <Card review={reviews[index]}></Card>
          <div className='flex text-3xl mt-10 gap-2 text-violet-400 font-bold mx-auto'>
              <button
                  onClick={leftShiftHandler}
                  className='cursor-pointer hover:text-violet-500 '>
                  <FiChevronLeft />
              </button>
              <button
                  onClick={rightShiftHandler}
                  className='cursor-pointer hover:text-violet-500 '>
                  <FiChevronRight />
              </button>

          </div>
          <div className='mt-6'>
              <button
                  onClick={surpriseHandler}
                  className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md fold-bold text-white text-lg '>Surprise Me</button>
          </div>
      </div>
  )
}

export default Testimonials