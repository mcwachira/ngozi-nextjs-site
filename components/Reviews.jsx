import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import Image from 'next/image'




const fetcher = url => axios.get(url).then(res => res.data)
const Reviews = () => {

    const [reviewText, setReviewText] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [pause, setPause] = useState(false)



  const { data, error } = useSWR('https://api.reviewsmaker.com/gmb/?placeid=ChIJGVjjkpsRLxgRhVui0Re2EBY', fetcher)
    
//   useEffect(() => {
//     const lastIndex = reviews.length -1 ;
//     if()
//   })

    useEffect(() => {
       let slider =  setInterval(() => {
            if (pause === false) {
                let newSlide = currentSlide === reviews?.length - 1 ? 0 : currentSlide + 1;
                setCurrentSlide(newSlide)
            }
        }, 3000)
        return () => clearInterval(slider)
    })

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // console.log(data)

    const { reviews } = data
    

 

    const handleNextSlide = () => {
let newSlide = currentSlide === reviews.length-1 ? 0 : currentSlide + 1; 
setCurrentSlide(newSlide)
    }

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? reviews.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    const setReview = (index) => {
        setCurrentSlide(index)
    }

  
  return (


    <>
          <div className="mt-10 flex flex-col items-center justify-center w-full text-gray-600">

<h1 className='font-semibold mx-auto text-3xl'>
    Reviews
</h1>


                  <div className="w-full flex p-4  ">
                  <div className="mb-2 flex w-full md:w-3/4 bg-white shadow-lg px-5 py-5   overflow-hidden relative mx-auto" >

         
                          {
                              reviews.map((review, index) => {
                             
                                  const { reviewAuthor, reviewDate, reviewText } = review

                                  return (
                                      <div key={index} className='   '>

                                          <AiOutlineLeft size={30} onClick={() => handlePrevSlide()} className='absolute left-0 text-3xl inset-y-1/2 text-black cursor-pointer' />

                                          
                                          
                                          <div className={`px-4 text-sm md:text-xl text-center text-gray-600  bg-white rounded-lg ${index === currentSlide ? "block w-full " : 'hidden' } `}>
                                              <div className="h2 text-2xl text-left text-gray-600">&quot;</div>
                                              
                                              <p className='text-xl'>
                                                  {review.reviewText === "Only rating provided." ? 'Ngozi Africa the best massage you can get in diani, professional and satisfying.' : review.reviewText}
                                              </p>
                                          
                                             
                                           
                                              <div className='flex right-0 justify-end mt-10'>
                                                  {review.reviewAuthor}
                                              </div>
                                              </div>
                                
                                           


                            
                                              <AiOutlineRight onClick={() => handleNextSlide()} className='absolute right-0 text-3xl inset-y-1/2 text-black cursor-pointer' />
                                          </div>

                                   
                                  )
                              })
                          }

                      </div>
                  </div>
                 


                  {/* <Review /> */}

                

               




</div>

    </>

  )
}

export default Reviews