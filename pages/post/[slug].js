import React from 'react'

import { getPosts, getPostsDetails } from '../../graphcsm'
import { Author, PostDetail, Categories,  PostWidget } from '../../blogComponents'
const PostDetails = ({ post }) => {
    // console.log(post)
    return (
        <>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <PostDetail post={post} />
                        <Author author={post?.author} />
                        {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
                        {/* <CommentsForm slug={post.slug} />
                        <Comments slug={post.slug} /> */}
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetails




// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    //destructuring the individual post
    const posts=  await getPosts()
    const paths = posts.map(
        
        (
            { 
                node: { slug }
             }) => 
             
             (
                { params:{ slug }
                     }
             )
             )

    console.log(posts)
    return {
        paths:paths, 
        fallback: false,
    };
}

// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getPostsDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}
