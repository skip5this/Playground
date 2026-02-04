import './App.css'
import { car, sponsors } from './data/sponsors'

function SponsorItem({ sponsor }) {
  const handleClick = () => {
    window.open(sponsor.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="sponsor-item" onClick={handleClick}>
      <div className="sponsor-info">
        <span className="sponsor-name">{sponsor.name}</span>
        <span className="sponsor-location">{sponsor.location}</span>
      </div>
      <span className="sponsor-arrow">→</span>
    </div>
  )
}

function App() {
  // Group sponsors by category
  const categories = sponsors.reduce((acc, sponsor) => {
    const cat = sponsor.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(sponsor)
    return acc
  }, {})

  return (
    <div className="app">
      <header className="header">
        <h1>🏎️ Race Sponsors</h1>
        <p className="subtitle">{car.team}</p>
        <div className="driver-info">
          <span>{car.driver}</span>
          <span className="number">#{car.number}</span>
          <span>{car.chassis}</span>
        </div>
      </header>

      <section className="car-section">
        <div className="car-image-container">
          {car.image ? (
            <img 
              src={car.image} 
              alt={`${car.driver}'s ${car.chassis}`}
              className="car-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
          ) : null}
          <div className="car-placeholder" style={{ display: car.image ? 'none' : 'block' }}>
            📸 Car image coming soon
          </div>
        </div>
      </section>

      <section className="sponsors-section">
        <h2>Sponsors ({sponsors.length})</h2>
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

export default App
