import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
  // Dispatches FETCH_POSTS to the reducer
  // dispatch is a resolver in a promise
  // call dispatch whenever we want to send data to the store
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => dispatch({
    type: FETCH_POSTS,
    payload: posts
  }));
  }

  export const createPost = (post) => dispatch => {
    console.log("action called")
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(post => dispatch({
        type: NEW_POST,
        payload: post
      }));
    }