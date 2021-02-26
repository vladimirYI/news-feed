import React from 'react';
import img from './error.jpg'
function ErrorMessage() {
    return (
        <>
            <h2>Что то пошло не так...</h2>
            <img src={img} alt="error"/>
        </>
    );
}

export {ErrorMessage};