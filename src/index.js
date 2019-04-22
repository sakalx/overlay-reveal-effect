import React, {useEffect} from 'react';

import './style.css';

const bodyStyle = document.body.style;

function animate(type = 'out') {
  let translateX = '170vw';
  let translateXReverse = '-170vw';

  if (type === 'in') {
    translateXReverse = translateX = '0';
  }

  bodyStyle.setProperty('--translate-x', translateX);
  bodyStyle.setProperty('--translate-x-reverse', translateXReverse);
}


function OverlayEffect({isOpen, children}) {

  useEffect(() => {
    (isOpen)
        ? animate('in')
        : animate('out');
  }, [isOpen]);

  return (
      <div className='-overlay-container'>
        <div className='-overlay-slide-skew'>
          <div className='-overlay-reverse-slide'>
            <div className='-overlay-reverse-skew'>
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}

export default OverlayEffect;
