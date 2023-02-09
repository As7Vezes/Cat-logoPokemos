
export function CardPokemon({name, url}) {

    return (
        <div>
            <ul key={name}>
                <li>{name}</li>
                <li>{url}</li>
            </ul>
        </div>
    )

}