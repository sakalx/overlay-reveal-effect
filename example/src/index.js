import React, {useState} from 'react';
import {render} from 'react-dom';
import './style.css';

import OverlayEffect from '../../dist';

const directions = [
  'top-right', 'top-left', 'bottom-left', 'bottom-right',
];

const colors = [
  '#ab9481', '#6f404b', '#939fab', '#667788', '#0f6d6d',
  '#6d0f0f', '#ffefd5', '#f5fffa', '#fff0f5', '#ffe4e1',
  '#f2c80f', '#fd625e', '#01b8aa', '#eaf651', '#ccccff',
  '#e5d865', '#e5e27e', '#fbb040', '#3fb1b7', '#eaddca',
  '#d9534f', '#f9f9f9', '#5bc0de', '#5cb85c', '#428bca',
];

const getRandomFromArray = (array) =>
    array[Math.floor(Math.random() * array.length)];

function App() {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState(getRandomFromArray(directions));
  const [fon, setFon] = useState({
    main: getRandomFromArray(colors),
    secondary: getRandomFromArray(colors),
  });

  const showOverlayEffect = (direct = getRandomFromArray(directions)) => e => {
    console.log(direct);

    setOpen(true);
    setDirection(direct);
    setFon({
      main: getRandomFromArray(colors),
      secondary: getRandomFromArray(colors),
    });
  };

  const hideOverlayEffect = () => {
    setOpen(false);
  };

  return (
      <main>
        {directions.map((direct, i) =>
            <button key={i} onClick={showOverlayEffect(direct)}>
              {direct} effect
            </button>,
        )}

        <button onClick={showOverlayEffect()}>
          SHOW RANDOM OVERLAY EFFECT
        </button>

        <OverlayEffect
            direction={direction}
            isOpen={open}
            mainFon={fon.main}
            secondaryFon={fon.secondary}
        >
          <span onClick={hideOverlayEffect}>✖</span>
          <h1>ご乗車歓迎</h1>

          <figure>
            <img
                alt='Asia'
                src='https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/static/img/asia-932068_1920.jpg'
            />
            <figcaption>
              オ ー バ ー レ イ 効 果
            </figcaption>
          </figure>
        </OverlayEffect>
      </main>
  );
}

render(<App/>, document.getElementById('root'));