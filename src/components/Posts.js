import React from 'react';
import PostItem from './PostItem.js'
import './Posts.css'

export default function Posts() {
    const posts = [
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1633450259789-f710c1cdb45a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
            title: "Questions about",
            user: "Indipendt online",
            subreddit: "politics",
            comment_count: 284,
        },
        {
            upvote: 54,
            image: "https://images.unsplash.com/photo-1626131719162-a086b0cdd644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
            title: "Questions about",
            user: "Indipendt online",
            subreddit: "politics",
            comment_count: 284,
        },
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1633414009555-5cb22d82f2db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: "Questions about",
            user: "Indipendt online",
            subreddit: "politics",
            comment_count: 284,
        },
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
            title: "Questions about",
            user: "Indipendt online",
            subreddit: "politics",
            comment_count: 284,
        },
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: "Questions about",
            user: "Indipendt online",
            subreddit: "politics",
            comment_count: 284,
        },
        {
            upvote: 54,
            image: "https://images.unsplash.com/photo-1611595664306-9511e1786657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: "Questions about",
            user: "Indipendt online",
            subreddit: "politics",
            comment_count: 284,
        }
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    );
}
