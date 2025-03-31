
export const generateArray = (firstAnimals) => {
   
    const animalsSelected = []
    const fourtyAnimals = []

    if(firstAnimals.length <= 20){
        const aux = [...firstAnimals]

        while(firstAnimals.length>0){
            const num1 = Math.floor(Math.random() * firstAnimals.length)
            const num2 = Math.floor(Math.random() * aux.length)

            fourtyAnimals.push(firstAnimals[num1])
            fourtyAnimals.push(aux[num2])

            firstAnimals.splice(num1,1)
            aux.splice(num2,1)

            animalsSelected.push(false)
            animalsSelected.push(false)

            if(fourtyAnimals.length >=40){
                break
            }
        }
    }
    else{
        const aux = firstAnimals.slice(0,firstAnimals.length/2)
        console.log(firstAnimals.slice(firstAnimals.length/2))
        console.log(aux)
    }
    return [fourtyAnimals,animalsSelected]
}

export const countCards = (count) => {
    if(count >= 1)
        return 0
    else
        return count+1
}

export const validateCards = () => {
    
}