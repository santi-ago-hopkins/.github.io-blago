import * as React from "react"
import { Link } from "gatsby"
// import globeImage from "/images/globe.png" // Import your globe image

const NavBar = () => (
  <nav style={{ backgroundColor: "#C0C0C0", padding: "10px" }}>
    <Link to="/" style={{ color: "blue", marginRight: "15px" }}>Home</Link>
    <Link to="/posts" style={{ color: "blue" }}>Posts</Link>
  </nav>
)

const Layout = ({ children }) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
    <NavBar />
    {children}
  </div>
)

const SpinningGlobe = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px', // Adjust as needed
  }}>
    <img 
      src="https://static.vecteezy.com/system/resources/thumbnails/022/829/173/small_2x/pixel-art-illustration-web-icon-pixelated-website-icon-globe-website-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg"
      alt="Spinning Globe"
      style={{
        width: '300px', // Adjust size as needed
        height: '300px',
        animation: 'spin 20s linear infinite',
      }}
    />
  </div>
)

export default function Home() {
  const mostRecentPost = {
    title: "hello-world",
    id: 1
  }

  return (
    <Layout>
      <h1 style={{ textAlign: 'left' }}>Welcome to Blago</h1>
      <p style={{ textAlign: 'left' }}>go's premier blog</p>
      <SpinningGlobe />
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <Link to={`/post/${mostRecentPost.id}`} style={{ color: 'blue' }}>
          Latest Post: {mostRecentPost.title}
        </Link>
      </div>
    </Layout>
  )
}

// ... rest of your code remains the same
