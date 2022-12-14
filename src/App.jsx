import React from 'react';
import './App.css';

// Components
import Header from './Components/Header';
import Card from './Components/Card';

// Data
import cardData from './data/data.js';

function App() {
  const cards = cardData.map(item => {
    return (
      <Card 
        title={item.title} 
        location={item.location} 
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className='main'>
        {cards}
      </div>
    </div>
  )
}

export default App;
