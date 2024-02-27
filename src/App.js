import React, { useState, useEffect } from 'react';
import Card from './components/card/card';
import api from './services/api';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get()
      .then(res => setData(res.data.results))
  }, [])


  return (
    <>
    <Card 
      pic={data[0].image}
      name={data[0].name}
      status={data[0].status}
    >
    </Card>
    {/* {data.map((item, index) => {
      return (<h1>{item.name}</h1>)
    })} */}
    </>
  );
}

export default App;
