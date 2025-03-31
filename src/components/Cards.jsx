import React from "react";
import "./Cards.css"

function Cards({urlanimal, name, isFlipped}){
    return (
        <div className={`card flex items-center justify-center rounded-lg border-2 border-black p-1 w-[150px] h-[278px] ${isFlipped ? 'flipped' : ''}`}>
            <div className="card__inner w-full h-full transition-transform duration-500 transform-3d relative">
                <div className="card__front absolute w-full h-full backface-hidden flex justify-center items-center rounded-lg bg-white transform rotate-y-180">
                    <img src={urlanimal} alt={`Image of a/an: ${name}`} className="card__image w-[94.5%] h-[97.3%] rounded-lg object-cover"/>
                </div>
                <div className="card__back absolute w-full h-full backface-hidden flex justify-center items-center rounded-lg bg-white">
                    <img src={"https://deckofcardsapi.com/static/img/XX.png"} alt={`Image of a/an: ${name}`} className="card__image w-[94.5%] h-[97.3%] rounded-lg object-cover"/>
                </div>
            </div>
        </div>
    )
}

export default Cards;