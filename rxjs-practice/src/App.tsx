import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import EventLog from './components/EventLog'
import Login from './components/Login'
import SearchBox from './components/SearchBox'
import Stopwatch from './components/Stopwatch'
import { Dashboard } from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div

      style={{

        padding: "30px",

        display: "grid",

        gap: "20px",

        maxWidth: "800px",

        margin: "0 auto",

      }}

    >

      <SearchBox />

      <Counter />

      <Stopwatch />

      <Login />

      <EventLog />

      <Dashboard />

    </div>
    </>
  )
}

export default App
