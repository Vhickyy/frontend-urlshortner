import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Statistics from './components/Statistics'

function App() {

  const short = async() => {
    const url = 'www.google.com'
    const response = await fetch('https://cleanuri.com/docs/api/v1/shorten', {
      method: 'POST',
      body: url
    })
    // const response = await fetch('https://cleanuri.com/docs/api/v1/shorten', {
    //   method: 'POST',
    //   body: url
    // })
    return response
  }

  useEffect(()=>{
    // const response = await short()
    short()
  },[])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Statistics/>
      <Footer/>
    </>
  )
}

export default App
