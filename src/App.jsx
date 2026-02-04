import { useState } from 'react'
import './App.css'
import { teams, getTeamById } from './data/teams'

function SponsorItem({ sponsor }) {
  const handleClick = () => {
    window.open(sponsor.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="sponsor-item" onClick={handleClick}>
      <div className="sponsor-info">
        <span className="sponsor-name">{sponsor.name}</span>
        <span className="sponsor-category">{sponsor.category}</span>
      </div>
      <span className="sponsor-arrow">→</span>
    </div>
  )
}

function TeamCard({ team, onClick }) {
  return (
    <div 
      className="team-card" 
      onClick={onClick}
      style={{ borderColor: team.color }}
    >
      <div className="team-color-bar" style={{ backgroundColor: team.color }} />
      <div className="team-card-content">
        <h3 className="team-name">{team.shortName}</h3>
        <div className="team-drivers">
          {team.drivers.map(d => (
            <span key={d.number} className="driver-tag">
              #{d.number} {d.name.split(' ').pop()}
            </span>
          ))}
        </div>
      </div>
      <span className="team-arrow">→</span>
    </div>
  )
}

function TeamView({ team, onBack }) {
  // Group sponsors by category
  const categories = team.sponsors.reduce((acc, sponsor) => {
    const cat = sponsor.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(sponsor)
    return acc
  }, {})

  return (
    <div className="app">
      <header className="header" style={{ background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}99 100%)` }}>
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{team.shortName}</h1>
        <p className="subtitle">{team.name}</p>
        <div className="driver-info">
          {team.drivers.map(d => (
            <span key={d.number} className="driver-chip">
              <span className="number">#{d.number}</span>
              {d.name}
            </span>
          ))}
        </div>
      </header>

      <section className="car-section">
        <div className="car-image-container">
          <img 
            src={team.image} 
            alt={`${team.shortName} ${team.chassis}`}
            className="car-image"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.querySelector('.car-placeholder').style.display = 'flex'
            }}
          />
          <div className="car-placeholder">
            <span>📸</span>
            <span>{team.chassis}</span>
          </div>
        </div>
        <div className="car-specs">
          <span>🏎️ {team.chassis}</span>
          <span>⚡ {team.engine}</span>
        </div>
      </section>

      <section className="sponsors-section">
        <h2>Sponsors ({team.sponsors.length})</h2>
        <div className="sponsor-list">
          {Object.entries(categories).map(([category, categorySponsors]) => (
            <div key={category}>
              <div className="category-header">{category}</div>
              {categorySponsors.map((sponsor) => (
                <SponsorItem key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        Tap any sponsor to visit their website
      </footer>
    </div>
  )
}

function HomeView({ onSelectTeam }) {
  return (
    <div className="app">
      <header className="header home-header">
        <h1>🏎️ Race Sponsors</h1>
        <p className="subtitle">F1 2026 Season</p>
        <p className="subtitle-small">11 Teams • 22 Drivers</p>
      </header>

      <section className="teams-section">
        <h2>Select a Team</h2>
        <div className="teams-list">
          {teams.map(team => (
            <TeamCard 
              key={team.id} 
              team={team} 
              onClick={() => onSelectTeam(team.id)}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        Built at the cabin 🏔️
      </footer>
    </div>
  )
}

function App() {
  const [selectedTeamId, setSelectedTeamId] = useState(null)
  
  if (selectedTeamId) {
    const team = getTeamById(selectedTeamId)
    return <TeamView team={team} onBack={() => setSelectedTeamId(null)} />
  }
  
  return <HomeView onSelectTeam={setSelectedTeamId} />
}

export default App
