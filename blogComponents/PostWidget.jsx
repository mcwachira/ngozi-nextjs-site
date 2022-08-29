import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../graphcsm'
const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {

    if (slug) {
      getSimilarPosts(categories, slug).then((results) => setRelatedPosts(results))
    } else {
      getRecentPosts().then((results) => setRelatedPosts(results))
    }


  }, [slug, categories])


  return (
    <div className="bg-white shadow-lg rounded-lg p-8  mb-8">




      <h3 className="text-xl mb-3 font-semi-bold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (


        <div key={index} className="flex items-center w-full mb-4">

          <div className="w-16 flex-none">

            <Image src={post.featuredImage.url}
              height="60px" width="60px" className="align-middle rounded-full" alt={post.title} />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format('MMM, DD, YYYY')}
            </p>

            {/* <Link href={`/post/${post.slug}`} className="text-md"  key={index}>{post.title} </Link> */}

            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}

    </div>
  )
}

export default PostWidget


// const getStaticProps = async() => {
//   const posts = await (getRecentPosts() || [])


// console.log(posts)
//   return {
//   props:{posts}
//   }
// }