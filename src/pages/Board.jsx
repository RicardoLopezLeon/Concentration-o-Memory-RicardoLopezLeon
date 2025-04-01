import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCards} from "../utils/functions";
import Cards from "../components/Cards";
import { addError, addSuccess, resetPoints } from "../redux/pointsSlice";
import { getAnimals } from "../utils/ConsumingAPIs";
import "./Board.css"
import Swal from "sweetalert2";

function Board(){

    const dispatch = useDispatch()
    const userName = useSelector((state) => state.user)
    const success = useSelector((state) => state.points.success)
    
    const [count, setCount] = useState(0)
    const [animals,setAnimals] = useState([])
    const [animalsSelected,setAnimalsSelected] = useState([])
    const [animalSelect, setAnimalSelect] = useState([])
    const [loadSelect, setLoadSelect] = useState(false)

    const fetchAnimals = async () => {
        try {
            const [arrayanimals, arrayselected] = await getAnimals();
            setAnimalsSelected(arrayselected);
            setAnimals(arrayanimals);
            dispatch(resetPoints(0))
        } catch (error) {
            console.error("Error fetching animals:", error);
        }
    };

    useEffect(() => {
        fetchAnimals()
    },[])

    useEffect(() => {
        if(success===20){
            setTimeout(() => {
                    Swal.fire({
                        title: `Congratulation ${userName.name}`,
                        text: 'You complete the game',
                        icon: 'success'
                    })
            },700)
        }
    },[success])

    const verificateCard= (index) => {

        setAnimalsSelected((prev) => {
            const updatedSelected = [...prev]
            updatedSelected[index] = true
            return updatedSelected
        });

        if(count === 0){
            setAnimalSelect([animals[index],index])
        }else{
            if (animalSelect[0].meta.name === animals[index].meta.name) {
                dispatch(addSuccess(1))
            } else {
                setTimeout(() => {
                    setLoadSelect(true)
                    setAnimalsSelected((prev) => {
                        const updatedSelected = [...prev]
                        updatedSelected[animalSelect[1]] = false
                        updatedSelected[index] = false
                        return updatedSelected
                    });
                    dispatch(addError(1))
                    setLoadSelect(false)
                }, 500);
            }
        }
        setCount(countCards(count))
    }

    return(
        <div className="board flex flex-col items-center p-5 perspective-[1000px]">
            <div className="board__container flex flex-wrap justify-evenly gap-4">
                {animals.map((animal,index) => (
                    <div key={index} className={`board__card flex justify-center items-center transition-transform duration-600 transform preserve-3d cursor-pointer rounded-xl ${animalsSelected[index]?'flipped ':''}`}
                    onClick={() => 
                        !animalsSelected[index]?verificateCard(index):Swal.fire({title:'This card is already flipped', icon:'warning',showConfirmButton: false,timer: 1000})
                    }
                    style={{pointerEvents:`${loadSelect?"none":"auto"}`}}>
                        <Cards urlanimal={animal.fields.image.url} name={animal.meta.name} isFlipped={animalsSelected[index]} /> 
                    </div>
                ))}
            </div>
            <div className="board__reset pt-8">
                <button onClick={() => fetchAnimals()}>Reset</button>
            </div>
        </div>
    )
}

export default Board;