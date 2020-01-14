import React from 'react';

function HomeCard(props) {
    return (
        <div className="m-4 card border-white" style={{ width: '300px' }}>
            <div className="d-flex justify-content-center card-img-top">
                <div className="rounded-circle m-3 p-4" style={{ backgroundColor: props.backgroundColor }}>
                    <img src={props.backgroundImage} alt={props.alt} width='160px' />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-muted">{props.text}</p>
            </div>
        </div>
    )
}

export default HomeCard;