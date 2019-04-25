import React, {useState} from 'react';
import {render} from 'react-dom';
import './style.css';

import OverlayEffect from '../../src';

function getRandomDirection() {
  const directions = ['top-right', 'top-left', 'bottom-left', 'bottom-right'];
  return directions[Math.floor(Math.random() * directions.length)];
}

function App() {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState(getRandomDirection());

  const toggleOverlayEffect = () => {
    setOpen(state => !state);
    //setDirection(getRandomDirection());
  };

  return (
      <main>

        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 onClick={toggleOverlayEffect}>
          Show Overlay Effect
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <OverlayEffect isOpen={open} direction={direction}>
          <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>

         <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>

         <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>

         <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>

         <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>

         <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>

         <h1 onClick={toggleOverlayEffect}>
            El Portal d'Art és la secció de Viquillibres que recull els llibres,
            manuals i guies que contenen material pertanyent a obres artístiques
            i al coneixement que apela els sentits i emocions. A la vostra dreta
            es troben organitzats per ordre alfabètic tots els volums, segons
            l'activitat
          </h1> <h5 onClick={toggleOverlayEffect}>
          El Portal d'Art és la secció de Viquillibres que recull els llibres,
          manuals i guies que contenen material pertanyent a obres artístiques i
          al coneixement que apela els sentits i emocions. A la vostra dreta es
          troben organitzats per ordre alfabètic tots els volums, segons
          l'activitat
        </h5><br/><br/><br/>


        </OverlayEffect>

      </main>
  );
}

render(<App/>, document.getElementById('root'));