import React, { useContext, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'

import firebase from '../firebase'

const PostContext = React.createContext()
const SetPostsContext = React.createContext()

export function usePostContext() {
    return useContext(PostContext)
}

export function useSetPostContext() {
    return useContext(SetPostsContext)
}

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([])

    function getAllPosts(collectionName) {
        async function getPosts() {
            const q = query(collection(firebase.db, collectionName))
            const qSnap = await getDocs(q)
            qSnap.forEach(doc => {
                setPosts(prev => [...prev, {
                    title: doc.id,
                    description: doc.data().description,
                    addDate: doc.data().addDate
                }])
            })
        }
        getPosts()
    }

    return (
        <SetPostsContext.Provider value={getAllPosts}>
            <PostContext.Provider value={posts}>
                    {children}
            </PostContext.Provider>
        </SetPostsContext.Provider>
    )
}
