import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
//import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restamte da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: INformações mantidas pelo componente (Lembrar: imutabilidade)


function App() {

  // const [counter, setCounter] = useState(0);

  // function incrementCounter() {
  //   setCounter(counter + 1);
  // }

const [devs, setDevs] = useState([]);


useEffect(() => {
  async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);
  }

  loadDevs();
},[]);

async function handleAddDev(data) {

  const response = await api.post('/devs', data);

  setDevs([...devs, response.data]);

  console.log(response);
}

  return (
    // <>
    // <h1>Contador: {counter}</h1>
    // <button onClick={incrementCounter}>Incrementar</button>
    // </>

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
