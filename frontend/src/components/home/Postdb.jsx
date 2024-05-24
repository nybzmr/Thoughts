import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PostCard from './PostCard';
function Postdb() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/Thoughts/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div>
            {/* {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    <p>{post.time}</p>
                    <p>Likes: {post.likes}</p>
                    <p>{post.postContent}</p>
                    <p>Comments: {post.comments}</p>
                    {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
                </div>
            ))} */}
            {posts.map((post, index) => (
          <PostCard
            key={index}
            name={post.name}
            time={post.time}
            likes={post.likes}
            postContent={post.postContent}
            comments={post.comments}
            imageUrl={post.imageUrl}
          />
        ))}
        
    </div>
  )
}

export default Postdb
