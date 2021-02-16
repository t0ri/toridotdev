import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Projects from './components/Projects/Projects'


import './App.scss'

function App() {
  const consoleMsg = () => {
    const style = (fontSize) => {
      return `
        padding: 10px 30px 10px 30px;
        background: linear-gradient(#a496fc, #46389C);

        border-radius: 30px;
        border: 1px solid lightgrey;
        box-shadow: 0px 0px 2px 5px black;
        
        color: white;
        font-size: ${fontSize};
        font-family: monospace;
      `
    }

    console.log('%c%s',
    style('20px'), 'Hello!')
    console.log('%c%s',
    style('15.5px'), 'How I built https://tori.dev/:')
    console.log('%c%s',
    style('16px'), 'https://medium.com/@t0ri/link')
  }
  return (
    <div className="App">
      <Navigation />

      <div className="content-container">
        <Welcome />
        <Projects />
      </div>
      {/* { consoleMsg() } */}
    </div>
  )
}

export default App
