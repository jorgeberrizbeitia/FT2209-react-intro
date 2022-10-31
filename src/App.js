import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Details from './components/Details';
import Message from './components/Message';

import ReactPlayer from 'react-player'

// function como la primera visualizacion de la pagina
function App() {

  // JS base
  const user1 = {
    name: "Caro",
    preferredPet: "dog"
  }

  const user2 = {
    name: "Iñigo",
    preferredPet: "cat"
  }

  return (
    <div className="App">

      {/* <Header />

      <Menu /> */}

      <Details person={user1}/>
      <Details person={user2}/>

      <hr />

      {/* <Message num={4}/> */}

      <Message num={4}>
        comentario anidado
      </Message>

      <Message num={10}>
        patata
      </Message>

      {/* <div> */}
        <ReactPlayer 
        url='https://youtu.be/dQw4w9WgXcQ' 
        controls={true}
        />
      {/* </div> */}

    </div>
  );
}

export default App;
