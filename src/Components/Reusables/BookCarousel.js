import React, { useEffect } from 'react';

import Glide from '@glidejs/glide/dist/glide.esm';
require('@glidejs/glide/dist/css/glide.core.min.css');
require('@glidejs/glide/dist/css/glide.theme.min.css');

function BookCarousel(props) {
    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            perView: 2,
            focusAt: 'center',
            gap: -100,
            autoplay: 4000,
            hoverpause: true,
            breakpoints: {
                470: {
                    perView: 1,
                    gap: -150,
                    peek: 50
                },
                440: {
                    perView: 1,
                    gap: -50,
                    peek: 50
                }
            }
        }).mount();
    }, [])

    return (
        <div className="glide mt-3">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {props.books.length && props.books.map((f,i) => {
                        return (
                            <li className="glide__slide" onClick={() => { alert(i) }}>
                                <img src={f} alt="book" width='150px' height='240px' />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left rounded-circle border-0 p-0" data-glide-dir="<" style={{ backgroundColor: '#000000b3' }}>
                    <img src="./assets/filled/arrow-left-w.png" alt="arrow-left" width="50px" height="50px" />
                </button>
                <button className="glide__arrow glide__arrow--right rounded-circle border-0 p-0" data-glide-dir=">" style={{ backgroundColor: '#000000b3' }}>
                    <img src="./assets/filled/arrow-right-w.png" alt="arrow-right" width="50px" height="50px" />
                </button>
            </div>
        </div>
    )
}

export default BookCarousel;