import React from 'react';

const InfoCard = ({ card }) => {
    const { title, img, description, bgColor } = card;
    return (
        <div class={`p-3 card lg:card-side bg-base-100 shadow-xl ${bgColor}`} >
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default InfoCard;