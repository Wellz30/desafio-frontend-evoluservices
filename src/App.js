import React, { useState, useEffect } from 'react';
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
    <>
    {console.log(data)}
    <Card 
      pic={data[person].image}
      name={data[person].name}
      status={data[person].status}
      location={data[person].location.name}
    >
    </Card>
    {/* {data.map((item, index) => {
      return (<h1>{item.name}</h1>)
    })} */}
    </>
  );
}

export default App;
