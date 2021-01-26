import Welcome from './components/Welcome/Welcome'
import Navigation from './components/Navigation/Navigation'


import './App.scss'

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="content-container">
        <Welcome />
      </div>
    </div>
  )
}

export default App
