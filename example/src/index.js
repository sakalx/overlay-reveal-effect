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
            Hide Overlay Effect
          </h1>
        </OverlayEffect>

      </main>
  );
}

render(<App/>, document.getElementById('root'));