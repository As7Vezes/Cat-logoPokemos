import { useEffect, useState } from "react";
import { apiAll } from "../api/api";
import { CardPokemon } from "./CardPorkemon";

export function ListPokemon() {

    const [pokeInfoData, setPokeInfoData] = useState([])

    useEffect(() => {
        const getPokemon = async () => {
            const response = await apiAll.get()

            console.log(response)
            setPokeInfoData(response.data.results)
            console.log(pokeInfoData)

        }

        getPokemon()

    }, [])

    return (
        <div>
            {
                pokeInfoData.map((pokeInfo) => {
                    return <CardPokemon 
                        name = {pokeInfo.name}
                        url = {pokeInfo.url}
                    />
                })
            }
        </div>
    )

}