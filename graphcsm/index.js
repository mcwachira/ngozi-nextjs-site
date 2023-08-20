import { graphql } from 'graphql'
import { request, gql } from 'graphql-request'
import { Categories } from '../components';


const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
  const query = gql`
query MyQuery {
   posts {
    id
  }
  postsConnection {
    edges {
      node {
        author {
          bio
          id
          name
          photo {
            url
          }
        }
        createdAt
           excerpt
        featuredImage {
          url
        }
        slug
        title
        categories {
          name
          slug
        }
     
      }
    }
  }
}


    `

  const result = await request(graphqlApi, query)

  return result.postsConnection.edges

}

export const getPostsDetails = async (slug) => {
  const query = gql`
  query GetPostDetails($slug:String!) {
    post(where :{slug:$slug}){
        author {
          bio
          id
          name
          photo {
            url
          }
        }
        createdAt
        slug
        title
           excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
     
     content{
      raw
     }
      }
    }
  

    `

  const result = await request(graphqlApi, query, { slug })
  console.log(result)
  return result.post

}


export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
        posts(
            orderBy:createdAt_ASC,
            last:3
        ){
            title, 
            featuredImage{
                url
            }
            createdAt
            slug
        }
    }
    `

  const result = await request(graphqlApi, query)
  return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
      query GetPostDetails($slug:String! , $categories:[String!]){
        posts(
        # returns all the slugs expect the post on and returns the category the slug post is in
            where:{slug_not:$slug, AND:{categories_some:{slug_in :$categories}}}
            last:3
        ){
            title, 
            featuredImage{
                url
            }
            createdAt
            slug
        }
      }
   
    
    `

  const result = await request(graphqlApi, query, { categories, slug })
  return result.posts
}

export const getCategories = async () => {
  const query = gql`
      query GetCategories{

categories{
    name,
     slug
}

      }
      `
  const result = await request(graphqlApi, query)
  return result.categories
}


