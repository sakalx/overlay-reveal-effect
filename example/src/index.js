import React, {useState} from 'react';
import {render} from 'react-dom';
import './style.css';

import OverlayEffect from '../../src';

function App() {
  const [open, setOpen] = useState(false);

  const toggleOverlayEffect = () => {
    setOpen(state => !state);
  };

  return (
      <main>

        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>

        <OverlayEffect isOpen={open}>
          <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres, manuals i guies que contenen material pertanyent a obres artístiques i al coneixement que apela els sentits i emocions. A la vostra dreta es troben organitzats per ordre alfabètic tots els volums, segons l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres, manuals i guies que contenen material pertanyent a obres artístiques i al coneixement que apela els sentits i emocions. A la vostra dreta es troben organitzats per ordre alfabètic tots els volums, segons l'activitat
          </h5>
        </OverlayEffect>

      </main>
  );
}

render(<App/>, document.getElementById('root'));