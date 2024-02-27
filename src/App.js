import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './components/card/Card';
import notFound from "./assets/images/notFound.png";
import api from './services/api';

function App() {

  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      const response = api.get()
        .then(res => {
          setData(res.data.results)
          setFullData(res.data.results)
        })
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, [])

  const handleSearch = (event) => {
    const term = event.target.value;
    setData(fullData);
    setSearchTerm(term);
    if (term === "") {
      setData(fullData)
    } else {
      const filterData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setData(filterData);
    }
  }

  return (
    <div className='home'>
      <div className='head'>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='cards'>
        {data.length ?
          data.map((item, index) => {
            return (
              <Card key={index}
                pic={item.image}
                name={item.name}
                status={item.status}
                location={item.location.name}
              >
              </Card>
            )
          }) :
          <div className='notFound'>
            <div><img src={notFound}></img></div>
            Not Found...
          </div>

        }
      </div>
    </div>

  );
}

export default App;
