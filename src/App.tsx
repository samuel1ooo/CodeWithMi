import './App.css'
import './components/Header'
import { Header } from './components/Header'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <Header/>
      <main className="app-content">
          <Projects/>
      </main>
    </>
  )
}

export default App
