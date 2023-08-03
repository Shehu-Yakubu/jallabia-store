import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './database'
import './App.css'

const App = () => {
  const dataElements = data.map(db => {
    return <Card
      key={db.id}
      db={db}
    />
  })

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      {dataElements}
      <Footer />
    </div>
  )
}

export default App
