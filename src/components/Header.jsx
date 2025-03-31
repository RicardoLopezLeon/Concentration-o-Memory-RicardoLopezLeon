import React from "react";
import { useSelector } from "react-redux";
import "./Header.css"

function Header(){

    const userName = useSelector((state) => state.user)
    const point = useSelector((state) => state.points)

    return(
        <div className="header flex flex-col md:flex-row items-center justify-around bg-gray-500 text-white p-4 shadow-2xl w-full">
            <div className="header__title text-center md:text-left">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                    Have a good game, {userName.name}
                </p>
            </div>
            <div className="header__points flex flex-col sm:flex-row items-center border-2 border-black rounded-lg mt-4 md:mt-0">
                <div className="header__success flex flex-col items-center border-b sm:border-r-2 sm:border-b-0 border-black rounded-l-md w-full sm:w-auto">
                    <div className="header__success-title bg-gradient-to-b from-gray-800 via-gray-500 to-black text-white p-4 sm:p-5 md:p-6 shadow-lg shadow-white/30
                    bg-gradient-to-b from-gray-700 via-gray-500 to-black text-white px-4 py-2 w-full text-center">
                        <p>
                            Successses
                        </p>
                    </div>
                    <div className="header__success-score p-1 text-xl">
                        <p>
                            {point.success}
                        </p>
                    </div>
                </div>
                <div className="header__errors flex flex-col items-center rounded-r-md w-full sm:w-auto">
                    <div className="header__errors-title bg-gradient-to-b from-gray-800 via-gray-500 to-black text-white p-4 sm:p-5 md:p-6 shadow-lg shadow-white/30 
                    bg-gradient-to-b from-gray-700 via-gray-500 to-black text-white px-4 py-2 w-full text-center">
                        <p>
                            Errors
                        </p>
                    </div>
                    <div className="header__errors-score p-1 text-xl ">
                        <p>
                            {point.errors}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;