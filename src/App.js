import React, { Fragment, useEffect } from 'react';

const Velocity = require('velocity-animate');

window.addEventListener('scroll', () => {
  const titleMenu = document.getElementById('titleMenu');

  if (window.scrollY > window.innerHeight) {
    // if(titleMenu.style.backgroundColor === '#000000')
    Velocity(titleMenu, "stop");
    Velocity(titleMenu, { backgroundColor: '#9100bd', backgroundColorAlpha: '1' }, { duration: 100 })
  } else {
    // if(titleMenu.style.backgroundColor === '#9100bd')
    Velocity(titleMenu, "stop");
    Velocity(titleMenu, { backgroundColor: '#000000', backgroundColorAlpha: '0.51' }, { duration: 100 })
  }
})

function App() {
  useEffect(() => {
    Velocity(document.getElementById('arrowImg'), { translateY: '5px' }, { loop: true, delay: '500', easing: 'easeInOutQuad' })
  }, [])

  return (
    <Fragment>
      <div id="titleMenu" className="w-100 d-flex justify-content-center text-white position-fixed" style={{ backgroundColor: '#00000082' }}>
        <div className="d-flex overflow-auto text-nowrap">
          <span className="p-2">Opcion 1</span>
          <span className="p-2">Opcion 2</span>
          <span className="p-2">Opcion 3</span>
          <span className="p-2">Opcion 4</span>
        </div>
      </div>
      <div>
        <div className="w-100 h-100 position-absolute d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 h-75 d-flex justify-content-start align-items-end">
            <div className="text-white text-uppercase mx-5" style={{ backgroundColor: '#00000082' }}>
              <h1 className="h1">Todos tenemos una historia</h1>
              <span>¡Comparte la tuya de la manera más interactiva!</span>
            </div>
          </div>
          <div className="w-100 h-25 d-flex justify-content-center align-items-center">
            <div id="titleArrow" className="rounded-circle d-flex justify-content-center align-items-center mb-4" style={{ backgroundColor: '#00000082', width: '60px', height: '60px', cursor: 'pointer' }}
              onMouseOver={(e) => {
                Velocity(document.getElementById('titleArrow'), "stop");
                Velocity(document.getElementById('titleArrow'), { scaleX: [1.2, 1], scaleY: [1.2, 1] }, { duration: 200, easing: 'easeInOutQuad' })
                Velocity(document.getElementById('titleArrow'), { scaleX: [1, 1.2], scaleY: [1, 1.2] }, { duration: 200, easing: 'easeInOutQuad' })
              }}
              onClick={() => {
                // document.body.style.overflow = 'hidden';
                Velocity(document.getElementById('textContent'), "scroll", { duration: 1000, easing: "easeInOutQuad", complete: function () { /*document.body.style.overflow = 'auto';*/ } })
              }}>
              <img id="arrowImg" src="./assets/arrow_down_white.png" width="60px" height="60px" alt="arrow_down" />
            </div>
          </div>
        </div>
        <img src={`https://picsum.photos/${window.innerWidth}/${window.innerHeight}`} width="100%" height={window.innerHeight} alt="titleImage" />
      </div>
      <div>
        <input type="button" />
      </div>
      <div id="textContent">
        </div>
    </Fragment>
  );
}

export default App;
