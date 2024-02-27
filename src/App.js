import React, { useEffect } from 'react';
import api from './services/api';

function App() {
  let dados;
  useEffect(() => {
    api.get().then(res => console.log(res))
  },[])

  return (
    <>Inicio</>
    
  );
}

export default App;
