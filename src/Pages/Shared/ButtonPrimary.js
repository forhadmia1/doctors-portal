import React from 'react';

const ButtonPrimary = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white border-0 shadow-lg">{children}</button>
    );
};

export default ButtonPrimary;