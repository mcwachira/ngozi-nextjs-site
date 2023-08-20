import React from 'react'
import Image from 'next/image'



const Author = ({ author }) => {
    // console.log(author.photo.url)
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-[#d05c14] '>
            <div className="absolute left-0 right-2 -top-14">
                <Image
                    src={author.photo.url}
                    unoptimized
                    alt={author?.name}
                    height='100px'
                    width='100px'
                    className='items-center rounded-full' />

            </div>

            <h3 className="text-white my-4 text-xl font-bold">
                {author?.name}
            </h3>
            <p className="text-white text lg">{author.bio}</p>


        </div>
    )
}

export default Author