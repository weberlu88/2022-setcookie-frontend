import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { cookieTest } from './axios'

function App() {
  const [count, setCount] = useState(0)

  const sendRequest = () =>{
    cookieTest().then((res) => {
      console.log(res)
    })
    console.log('success.')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button onClick={sendRequest}>Press to send request</button>
        </p>
      </header>
    </div>
  )
}

export default App
