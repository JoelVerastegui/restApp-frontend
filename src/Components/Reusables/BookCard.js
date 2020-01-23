import React, { useState, useEffect } from 'react';
import { primaryColor } from '../../Config/colors';

function BookCard(props) {
    const [innerWidth, setInnerWidth] = useState('');

    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
    })

    useEffect(()=>{
        setInnerWidth(window.innerWidth);
    }, [])

    return (
        <div className={"card shadow rounded-0 " + (innerWidth <= 480 ? "my-4" : "m-4")} style={{ width: '189.5px', cursor: 'pointer' }} onClick={()=>{props.onClick()}}>
            <div className="d-flex justify-content-center card-img-top">
                <img src={`https://picsum.photos/313/500`} alt="book" width='100%' height='300px' onError={(e) => { e.target.onError = null; e.target.src = props.img }} />
            </div>
            <div className="d-flex font-italic" style={{ padding: '0px 20px' }}>
                <small className="text-muted">Escrito por John Carter</small>
            </div>
            <div className="card-body" style={{ padding: '10px 20px' }}>
                <h5 className="card-title" style={{ fontSize: '17px' }}>{props.title}</h5>
                <p className="card-text text-muted" style={{ fontSize: '14px' }}>{props.description}</p>
            </div>
            <div className="d-flex justify-content-around align-items-center py-2" style={{ color: primaryColor }}>
                <div>
                    <small className="p-2">20</small>
                    <img src="./assets/filled/heart.png" alt="heart" width="20px" height="20px" />
                </div>
                <div>
                    <small className="p-2">203</small>
                    <img src="./assets/outlined/views.png" alt="views" width="20px" height="20px" />
                </div>
                <div>
                    <small className="p-2">2</small>
                    <img src="./assets/outlined/chapters.png" alt="chapters" width="20px" height="20px" />
                </div>
            </div>
        </div>
    )
}

export default BookCard;