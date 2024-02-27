import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './components/card/card';
import api from './services/api';

function App() {

  const [data, setData] = useState([]);
  const person = 16;

  useEffect(() => {
    api.get()
      .then(res => setData(res.data.results))
  }, [])


  return (
    <div className='home'>
      {console.log(data)}
      {data.map((item, index) => {
        return (
          <Card key={index}
            pic={item.image}
            name={item.name}
            status={item.status}
            location={item.location.name}
          >
          </Card>
        )
      })}
    </div>
  );
}

export default App;
