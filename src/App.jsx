import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>🏔️ Cabin Playground</h1>
        <p>Vibe coding with Scott & Dad</p>
      </header>
      
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to see changes</p>
        </div>
        
        <section className="projects">
          <h2>Projects</h2>
          <p>Build stuff here! Each push auto-deploys to Vercel.</p>
        </section>
      </main>
      
      <footer>
        <p>Built from WhatsApp 📱 → Claude 🤖 → Vercel 🚀</p>
      </footer>
    </div>
  )
}

export default App
