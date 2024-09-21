import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
        <nav style={{ backgroundColor: "#C0C0C0", padding: "10px" }}>
            <Link to="/" style={{ color: "blue", marginRight: "15px" }}>Home</Link>
            <Link to="/posts" style={{ color: "blue" }}>Posts</Link>
        </nav>
        {children}
    </div>
)

const BlogPost = ({ post }) => (
    <div>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <div>{post.content}</div>
    </div>
)

export default function Posts() {
    const [searchTerm, setSearchTerm] = useState("")

    const posts = [
        {
            id: 1,
            title: "hello-world",
            subtitle: "two steps ahead",
            content: "this is my first post on blago.blog, the site is still under development"
        },
    ]

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Layout>
            <h1>Blog Posts</h1>
            <p>Total Posts: {posts.length}</p>
            <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%", padding: "5px", marginBottom: "20px" }}
            />
            
            {/* Display filtered posts in a list */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredPosts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                        <h2>{post.title}</h2>
                        <p>{post.subtitle}</p>
                        <Link to={`/post/${post.id}`} style={{ color: "blue" }}>Read more</Link>
                    </li>
                ))}
            </ul>

            {/* Optionally render BlogPost for selected post */}
            {/* This part should be handled via routing in Gatsby */}
        </Layout>
    )
}
