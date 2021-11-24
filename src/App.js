import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { PostProvider } from './contexts/PostContext'

export default function App() {
    return (
        <PostProvider>
            <Header />
            <Main />
        </PostProvider>
    )
}
