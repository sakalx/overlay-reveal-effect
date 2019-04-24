import React, {useEffect, useRef} from 'react';

import './style.css';

function animate({
                   direction = 'top-right',
                   elStyling,
                   isOpen,
                 }) {
  let translateX,
      translateXReverse,
      translateOverlay,
      skewCorner,
      skewCornerReverse;

  // Choosing direction:
  switch (direction) {
    case 'top-left':
      translateX = '-170vw';
      translateXReverse = '170vw';
      translateOverlay = '340vw';
      skewCorner = '-20deg';
      skewCornerReverse = '20deg';
      break;
    case 'top-right':
      translateX = '170vw';
      translateXReverse = '-170vw';
      translateOverlay = '-340vw';
      skewCorner = '20deg';
      skewCornerReverse = '-20deg';
      break;
    case 'bottom-left':
      translateX = '-170vw';
      translateXReverse = '170vw';
      translateOverlay = '340vw';
      skewCorner = '20deg';
      skewCornerReverse = '-20deg';
      break;
    case 'bottom-right':
      translateX = '170vw';
      translateXReverse = '-170vw';
      translateOverlay = '-340vw';
      skewCorner = '-20deg';
      skewCornerReverse = '20deg';
      break;
  }

  if (isOpen) {
    translateOverlay = translateXReverse = translateX = '0';
  }

  elStyling.setProperty('--translate-x', translateX);
  elStyling.setProperty('--translate-x-reverse', translateXReverse);
  elStyling.setProperty('--translate-x-overlay', translateOverlay);
  elStyling.setProperty('--skew', skewCorner);
  elStyling.setProperty('--skew-reverse', skewCornerReverse);
}

function OverlayEffect({
                         children,
                         direction,
                         isOpen,
                       }) {
  const containerEl = useRef(null);

  useEffect(() => {
    const containerStyling = containerEl.current.style;

    animate({
      direction,
      elStyling: containerStyling,
      isOpen,
    });

  }, [isOpen]);

  useEffect(() => {
    const containerStyling = containerEl.current.style;

    setTimeout(() => {
      containerStyling.setProperty('top', 0);
    }, 500);
  }, []);

  return (
      <div className='-overlay-container' ref={containerEl}>
        <div className='-overlay-slide-skew'>
          <section className='-overlay-bg-screen'/>

          <div className='-overlay-reverse-skew'>
            <div className='-overlay-reverse-slide'>
              {children}
            </div>
          </div>

        </div>
      </div>
  );
}

export default OverlayEffect;
