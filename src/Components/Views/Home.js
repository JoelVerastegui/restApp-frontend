import React, { Fragment, useState, useEffect } from 'react';

import HomeCard from '../Reusables/HomeCard';

require('velocity-animate/velocity');

function Home() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener('resize',()=>{
    setInnerWidth(window.innerWidth);
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        if(document.getElementById('titleMenu').style.backgroundColor === 'rgba(37, 28, 59, 0.51)')
        // document.getElementById('titleMenu').velocity("stop");
        document.getElementById('titleMenu').velocity({ backgroundColor: 'rgb(37, 28, 59)' }, { duration: 100 })
        // document.getElementById('titleMenu').velocity("stop");
      } else {
        if(document.getElementById('titleMenu').style.backgroundColor === 'rgb(37, 28, 59)')
        // document.getElementById('titleMenu').velocity("stop");
        document.getElementById('titleMenu').velocity({ backgroundColor: 'rgba(37, 28, 59, 0.51)' }, { duration: 100 })
        // document.getElementById('titleMenu').velocity("stop");
      }
    })
    
    document.getElementById('arrowImg').velocity({ translateY: '5px' }, { loop: true, delay: '500', easing: 'easeInOutQuad' })
  }, [])

  return (
    <Fragment>
      <div id="titleMenu" className="w-100 d-flex justify-content-center text-white position-fixed shadow" style={{ backgroundColor: '#251c3b82', zIndex: 1000 }}>
        <div className="w-100 d-flex justify-content-center overflow-auto text-nowrap">
          <span className="p-2" style={{ cursor: 'pointer' }}>Opcion 1</span>
          <span className="p-2" style={{ cursor: 'pointer' }}>Opcion 2</span>
          <span className="p-2" style={{ cursor: 'pointer' }}>Opcion 3</span>
          <span className="p-2" style={{ cursor: 'pointer' }}>Opcion 4</span>
        </div>
        <div>
          <input type="button" className="w-100 h-100 btn btn-success rounded-0" value="Log In" onClick={()=>{window.location='/login'}} />
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
                // document.getElementById('titleArrow').velocity("stop");
                document.getElementById('titleArrow').velocity({ scaleX: [1.2, 1], scaleY: [1.2, 1] }, { duration: 200, easing: 'easeInOutQuad' })
                document.getElementById('titleArrow').velocity({ scaleX: [1, 1.2], scaleY: [1, 1.2] }, { duration: 200, easing: 'easeInOutQuad' })
              }}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById('textContent').offsetTop,
                  left: 0,
                  behavior: 'smooth'
                });
              }}>
              <img id="arrowImg" src="./assets/filled/arrow_down_w.png" width="60px" height="60px" alt="arrow_down" />
            </div>
          </div>
        </div>
        <img src={`https://picsum.photos/${window.innerWidth}/${window.innerHeight}`} width="100%" height={window.innerHeight} alt="titleImage" onError={(e)=>{e.target.onError = null; e.target.src = './assets/default-background.jpg'}} />
      </div>
      <div id="textContent">
        <div className="container d-flex justify-content-center align-items-center flex-wrap p-4">
          <HomeCard
            backgroundColor='#7732a8'
            backgroundImage='./assets/filled/magic.png'
            alt='magic_book'
            title='Escribe tus propias historias'
            text='Refleja tu imaginación y sé libre de escribirlo.' />

          <HomeCard
            backgroundColor='#94e3dc'
            backgroundImage='./assets/filled/global.png'
            alt='earth'
            title='Abierto para todos'
            text='Comparte tus historias con todo el mundo.' />

          <HomeCard
            backgroundColor='#E5B94C'
            backgroundImage='./assets/filled/pencil.png'
            alt='editor'
            title='Edita de manera fácil'
            text='Edita y publica tus historias de la manera más sencilla.' />
        </div>
        <div className="w-100">
          <div className="w-100 d-flex flex-wrap align-items-center" style={{ backgroundColor: '#251c3b' }}>
            <div className={(innerWidth < 1000 ? 'w-100' : 'w-50 h-100')}>
              <div className={(innerWidth < 1000 ? 'd-flex justify-content-center' : '') + " p-4"}>
                <img src="./assets/filled/moon.png" alt="moon" width={innerWidth < 1000 ? '250px' : '500px'} height={innerWidth < 1000 ? '250px' : '500px'} />
              </div>
            </div>
            <div className={(innerWidth < 1000 ? 'w-100' : 'w-50 h-100') + ' text-white'}>
              <div className="h-100 d-flex flex-column justify-content-center flex-wrap px-4">
                <h1 className="h1 mb-4">Descubre historias jamás antes contadas...!</h1>
                <span className="h3 font-weight-light">Inspírate con las historias de miles de personas en el mundo y sumérjete en las profundidades de tu imaginación.</span>
                <div className="w-100 d-flex justify-content-center p-4">
                  <input type="button" className="btn btn-dark font-weight-bold" style={{fontSize: '25px'}} value="¡Descubrir historias...!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut mi a ex dictum porta. Duis id quam ac nisi commodo congue sit amet ut dolor. Nulla nec mi lacinia, mollis ex sit amet, malesuada justo. Nunc pellentesque, nisl vitae auctor rutrum, lectus magna pulvinar nulla, sit amet auctor purus ipsum quis dui. Vivamus felis orci, tempus vel volutpat non, facilisis vel sem. Maecenas scelerisque sodales velit et semper. Morbi aliquam tellus vitae libero laoreet vehicula. Suspendisse nec arcu ut enim tincidunt blandit in vitae mi. Suspendisse tincidunt ipsum id orci lobortis, eget tempor nibh vulputate. Integer placerat massa dui, eu porta lorem tincidunt eu. Nullam sollicitudin condimentum porta. Aliquam quis libero pellentesque nisl aliquet mattis. Suspendisse interdum massa et sapien convallis commodo. Donec efficitur ipsum mi, nec bibendum diam cursus sed.
          Donec nec lorem nibh. Fusce sit amet scelerisque libero. Nunc tristique, neque quis vehicula vulputate, nulla odio hendrerit quam, quis vehicula mauris mauris nec ex. Donec ac rhoncus ex. Pellentesque et scelerisque dui. Sed vel dictum urna. Vestibulum vestibulum, sem quis ultrices lacinia, quam nunc interdum nibh, non vehicula dolor velit vel ipsum. Vivamus ut tellus sed tellus auctor commodo. Suspendisse ullamcorper accumsan condimentum. Nullam at ligula quam. In facilisis velit id tincidunt semper. Proin semper vulputate tortor, ut maximus nulla iaculis quis. Quisque hendrerit tincidunt turpis non suscipit. Pellentesque ut sodales enim. Mauris posuere nisl in urna molestie tempor.
          Aliquam lectus nisi, accumsan eget sapien sed, sollicitudin aliquam ex. Nunc dignissim non dui in blandit. Donec eget nibh viverra, bibendum lorem ac, tristique magna. Curabitur imperdiet erat a turpis commodo pulvinar. Mauris sem ipsum, finibus vitae efficitur vitae, tempus nec sem. Sed vel enim sollicitudin, malesuada nibh pretium, egestas est. Donec vel dignissim purus. Fusce lobortis augue sed orci laoreet laoreet.
          Pellentesque ac eleifend neque. Maecenas sit amet tortor a nunc posuere venenatis finibus sed eros. Vivamus lobortis est vitae sapien suscipit, eu dapibus orci egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tincidunt tortor a libero rutrum dignissim. Etiam sagittis, metus quis varius auctor, lacus arcu sagittis libero, quis rhoncus odio augue a nisl. Etiam eu massa et eros imperdiet luctus. Nunc viverra turpis id augue suscipit, eu interdum ipsum vestibulum. Ut scelerisque nunc non mattis iaculis.
          Phasellus velit lorem, iaculis et facilisis sit amet, auctor eget dolor. Cras vitae ultricies ex. Maecenas eu nisl sed mauris scelerisque vehicula. Mauris viverra ipsum at pellentesque iaculis. Morbi velit tellus, interdum ut finibus ac, aliquet ut turpis. Integer nec urna eget libero tincidunt rutrum eget id ligula. Morbi nec elit a libero suscipit accumsan vel at libero. Sed porta non neque quis elementum. Nam pulvinar vitae felis ac semper. Etiam sit amet nisl pulvinar, vehicula ante eget, tempus elit. Quisque ornare venenatis orci, vel venenatis nibh gravida vel. Duis pharetra lacinia tellus, ut suscipit ligula fringilla ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut lacus vitae libero placerat venenatis vel ac est. Nunc felis enim, facilisis quis accumsan eu, fermentum vel ex. Nam commodo non nulla eu dignissim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut mi a ex dictum porta. Duis id quam ac nisi commodo congue sit amet ut dolor. Nulla nec mi lacinia, mollis ex sit amet, malesuada justo. Nunc pellentesque, nisl vitae auctor rutrum, lectus magna pulvinar nulla, sit amet auctor purus ipsum quis dui. Vivamus felis orci, tempus vel volutpat non, facilisis vel sem. Maecenas scelerisque sodales velit et semper. Morbi aliquam tellus vitae libero laoreet vehicula. Suspendisse nec arcu ut enim tincidunt blandit in vitae mi. Suspendisse tincidunt ipsum id orci lobortis, eget tempor nibh vulputate. Integer placerat massa dui, eu porta lorem tincidunt eu. Nullam sollicitudin condimentum porta. Aliquam quis libero pellentesque nisl aliquet mattis. Suspendisse interdum massa et sapien convallis commodo. Donec efficitur ipsum mi, nec bibendum diam cursus sed.
          Donec nec lorem nibh. Fusce sit amet scelerisque libero. Nunc tristique, neque quis vehicula vulputate, nulla odio hendrerit quam, quis vehicula mauris mauris nec ex. Donec ac rhoncus ex. Pellentesque et scelerisque dui. Sed vel dictum urna. Vestibulum vestibulum, sem quis ultrices lacinia, quam nunc interdum nibh, non vehicula dolor velit vel ipsum. Vivamus ut tellus sed tellus auctor commodo. Suspendisse ullamcorper accumsan condimentum. Nullam at ligula quam. In facilisis velit id tincidunt semper. Proin semper vulputate tortor, ut maximus nulla iaculis quis. Quisque hendrerit tincidunt turpis non suscipit. Pellentesque ut sodales enim. Mauris posuere nisl in urna molestie tempor.
          Aliquam lectus nisi, accumsan eget sapien sed, sollicitudin aliquam ex. Nunc dignissim non dui in blandit. Donec eget nibh viverra, bibendum lorem ac, tristique magna. Curabitur imperdiet erat a turpis commodo pulvinar. Mauris sem ipsum, finibus vitae efficitur vitae, tempus nec sem. Sed vel enim sollicitudin, malesuada nibh pretium, egestas est. Donec vel dignissim purus. Fusce lobortis augue sed orci laoreet laoreet.
          Pellentesque ac eleifend neque. Maecenas sit amet tortor a nunc posuere venenatis finibus sed eros. Vivamus lobortis est vitae sapien suscipit, eu dapibus orci egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tincidunt tortor a libero rutrum dignissim. Etiam sagittis, metus quis varius auctor, lacus arcu sagittis libero, quis rhoncus odio augue a nisl. Etiam eu massa et eros imperdiet luctus. Nunc viverra turpis id augue suscipit, eu interdum ipsum vestibulum. Ut scelerisque nunc non mattis iaculis.
        Phasellus velit lorem, iaculis et facilisis sit amet, auctor eget dolor. Cras vitae ultricies ex. Maecenas eu nisl sed mauris scelerisque vehicula. Mauris viverra ipsum at pellentesque iaculis. Morbi velit tellus, interdum ut finibus ac, aliquet ut turpis. Integer nec urna eget libero tincidunt rutrum eget id ligula. Morbi nec elit a libero suscipit accumsan vel at libero. Sed porta non neque quis elementum. Nam pulvinar vitae felis ac semper. Etiam sit amet nisl pulvinar, vehicula ante eget, tempus elit. Quisque ornare venenatis orci, vel venenatis nibh gravida vel. Duis pharetra lacinia tellus, ut suscipit ligula fringilla ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut lacus vitae libero placerat venenatis vel ac est. Nunc felis enim, facilisis quis accumsan eu, fermentum vel ex. Nam commodo non nulla eu dignissim.</p>
      </div>
    </Fragment>
  );
}

export default Home;