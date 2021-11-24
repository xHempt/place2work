import React, { useEffect } from 'react'
import { usePostContext, useSetPostContext } from '../contexts/PostContext'

export default function Main() {
    const posts = usePostContext()
    const getPosts = useSetPostContext()

    const colorValues = [
        "var(--color-primary)",
        "var(--color-secondary)",
        "var(--color-accent)"
    ]

    useEffect(() => {
        getPosts('posts')
        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <div className="posts--wrapper">
                {posts.map((post, index) => (
                    <div className="post--wrapper">
                        <div 
                            className="post" 
                            key={index}
                            style={{ backgroundColor: colorValues[Math.floor(Math.random()*colorValues.length)] }}
                        >
                            <div className="post--headline">
                                <h2>{post.title}</h2>
                                <span>{post.addDate}</span>
                            </div>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
