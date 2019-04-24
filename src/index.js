import React, {useEffect, useRef} from 'react';

import './style.css';



function animate(elStyling, type = 'out') {

  let translateX = '-170vw';
  let translateXReverse = '170vw';
  let translateOverlay = '340vw';

  if (type === 'in') {
    translateOverlay = translateXReverse = translateX = '0';
  }

  elStyling.setProperty('--translate-x', translateX);
  elStyling.setProperty('--translate-x-reverse', translateXReverse);
  elStyling.setProperty('--translate-x-overlay', translateOverlay);
}

function OverlayEffect({isOpen, children}) {
  const containerEl = useRef(null);


  useEffect(() => {

    const containerStyling = containerEl.current.style;

    (isOpen)
        ? animate(containerStyling, 'in')
        : animate(containerStyling, 'out');
  }, [isOpen]);

  return (
      <div className='-overlay-container' ref={containerEl}>
        <div className='-overlay-slide-skew'>

          <section className='-overlay-slide-2'>


          </section>

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
