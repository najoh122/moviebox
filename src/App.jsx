
import { useState } from 'react'
import './App.css'

const movies = [
  { id:1, title:"Loki", year:"2021", rating:"8.2", img:"https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" },
  { id:2, title:"Spider-Man: Into The Spider-Verse", year:"2018", rating:"8.4", img:"https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKxKcyEwJlqY.jpg" },
  { id:3, title:"The Batman", year:"2022", rating:"7.8", img:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id:4, title:"Avengers: Endgame", year:"2019", rating:"8.4", img:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id:5, title:"John Wick 4", year:"2023", rating:"7.9", img:"https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" },
  { id:6, title:"Avatar: Way of Water", year:"2022", rating:"7.7", img:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
]

function App() {
  const [search, setSearch] = useState("")
  const filtered = movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="moviebox">
      {/* SIDEBAR MENU */}
      <div className="sidebar">
        <h2 className="logo">🍿 MovieBox</h2>
        <p className="menu-title">Menu</p>
        <ul>
          <li className="active">🏠 Home</li>
          <li>🎬 Movies</li>
          <li>📺 TV Shows</li>
          <li>⭐ Favorites</li>
        </ul>
        <div className="play-box">
          <p>Play movies & TV shows online in HD quality</p>
          <button>Start Watching</button>
        </div>
        <p className="logout">⎋ Log out</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">
        <div className="topbar">
          <input placeholder="Search movies..." value={search} onChange={(e)=>setSearch(e.target.value)} />
          <div className="user">Hi, User 😊</div>
        </div>

        <div className="hero">
          <h1>John Wick 4: Chapter</h1>
          <p>John Wick uncovers a path to defeating The High Table. But must face a new enemy...</p>
          <button className="watch-btn">▶ Watch Now</button>
        </div>

        <h3 className="section">Trending Movies 🔥</h3>
        <div className="grid">
          {filtered.map(m => (
            <div className="card" key={m.id}>
              <img src={m.img} alt={m.title} />
              <div className="card-info">
                <span>{m.year} • ⭐ {m.rating}</span>
                <h4>{m.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App