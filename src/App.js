import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './components/card/Card';
import Modal from './components/modal/Modal';
import notFound from "./assets/images/notFound.png";
import logotipo from "./assets/images/logotipo.png"
import rick from "./assets/images/rick.webp"
import api from './services/api';

function App() {

  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='home'>
      <div className='head'>
        <div className='logotipoDiv'>
          <img className='logotipo' src={logotipo}></img>
        </div>
        <input className='input'
          type="text"
          placeholder="Search character..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className='logotipoDiv'>
          <img className='rick' src={rick}></img>
        </div>
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
                openModal={openModal}
              >
              </Card>
            )
          }) :
          <div className='notFound'>
            <div className='notFoundDiv'><img className='notFoundImage' src={notFound}></img></div>
            Not Found...
          </div>
        }
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
      </Modal>
    </div>
  );
}

export default App;
