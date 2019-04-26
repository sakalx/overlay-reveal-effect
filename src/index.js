import React, {useEffect, useLayoutEffect, useRef} from 'react';

import './style.css';

let translateX,
    translateXReverse,
    translateOverlay,
    skewCorner,
    skewCornerReverse;

function setDirection(direction) {
  switch (direction) {
    case 'top-right':
      translateX = '170vw';
      translateXReverse = '-170vw';
      translateOverlay = '-340vw';
      skewCorner = '20deg';
      skewCornerReverse = '-20deg';
      break;
    case 'top-left':
      translateX = '-170vw';
      translateXReverse = '170vw';
      translateOverlay = '340vw';
      skewCorner = '-20deg';
      skewCornerReverse = '20deg';
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
    default:
      console.error(
          'Wrong property direction. "top-right" | "top-left" | "bottom-left" | "bottom-right".');
  }
}

function OverlayEffect({
                         children,
                         direction = 'top-right',
                         isOpen = false,
                         mainFon = '#90caf9',
                         secondaryFon = '#ec407a',
                       }) {
  const containerEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerEl.current.style.setProperty('top', 0);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    const container = containerEl.current.style;

    setDirection(direction);
    (isOpen)
        ? translateOverlay = translateXReverse = translateX = '0'
        : setDirection(direction);

    container.setProperty('--translate-x', translateX);
    container.setProperty('--translate-x-reverse', translateXReverse);
    container.setProperty('--translate-x-overlay', translateOverlay);
    container.setProperty('--skew', skewCorner);
    container.setProperty('--skew-reverse', skewCornerReverse);
  }, [isOpen]);

  useLayoutEffect(() => {
    const container = containerEl.current.style;

    container.setProperty('--main-background', mainFon);
    container.setProperty('--secondary-background', secondaryFon);
  }, [mainFon, secondaryFon]);

  return (
      <div className='-overlay-container' ref={containerEl}>
        <div className='-overlay-slide-skew'>
          <section className='-overlay-bg-screen'/>

          <div className='-overlay-reverse-slide-skew'>
            {children}
          </div>

        </div>
      </div>
  );
}

export default OverlayEffect;
