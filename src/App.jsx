import React from 'react'
import NavBar from "./NavBar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"
import Footer from "./footer"

export default function App() {
  
  const cards = data.map(item => {
    console.log(item)
    return (
      <Card 
        key={item.id}
        img={item.imageUrl}
        location={item.location}
        stat={item.stats.rating}
        title={item.title}
        url={item.googleMapsUrl}
        desc={item.description}
      />
    )
  })
  
  
  return (
    <div>
    <NavBar />
    <Hero />
    {cards}
      <Footer />
      </div>

  )
}
