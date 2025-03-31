import { generateArray } from "./functions"

export const getAnimals = async() => {
    const response =await  fetch(" https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20")
    const results = await response.json()
    const [arrayAnimals,arraySelected] = generateArray(results.entries)
    return  [arrayAnimals,arraySelected]
}