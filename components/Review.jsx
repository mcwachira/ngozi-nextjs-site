import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)
const Review = () => {

    const [reviewText, setReviewText] = useState(false)
    const { data, error } = useSWR('https://api.reviewsmaker.com/gmb/?placeid=ChIJGVjjkpsRLxgRhVui0Re2EBY', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


//   console.log(data)

  const {reviews} = data

  return (
      <div className="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow mx-auto">
          <div className="mb-2">
           
                
                {
                    reviews.map((review, index) => {
                        const {reviewAuthor, reviewDate, reviewText} = review

                        return (
                            <div key={index}>
                         
                                <div className="h2 text-4xl text-left text-gray-600">&quot;</div>
                                <div className="px-4 sm:text-sm text-center text-gray-600 text-xl">

                                    {review.reviewText === "Only rating provided."? null : review.reviewText}
                                    <div className='flex justify-end mt-5'>
                                        {review.reviewAuthor}
                                    </div>
                                    <div className="h3 text-3xl text-right text-gray-600">&quot;</div>
                                    
                                </div>
                               
                            </div>
                        )
                    })
                }
           
          </div>
      </div>
  )
}

export default Review