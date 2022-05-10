import React from 'react';

const InfoCard = ({ card }) => {
    const { title, img, description, bgColor } = card;
    return (
        <div className={`p-3 card lg:card-side bg-base-100 shadow-xl ${bgColor}`} >
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default InfoCard;