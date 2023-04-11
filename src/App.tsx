import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout/index'
import { useContext } from 'react'
import ThemeColorContext from './context/ThemeColorContext'
import { ThemeDark, ThemeLight } from './themes/index'

function App() {
  const {isDarkTheme, setTheme} = useContext(ThemeColorContext)

  return (
    <div className="App">
      <Router>
          <ThemeProvider theme={isDarkTheme ? ThemeDark : ThemeLight}>
          <Layout/>
          </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
