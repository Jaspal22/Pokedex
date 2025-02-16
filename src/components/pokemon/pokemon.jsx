import { Link } from "react-router-dom";
import "./pokemon.css"

function Pokemon({name, image , id}){
        return(
               
                <div className="poke-card">
                <Link to={`/pokemon/${id}`}>
                <dev className="text-sec"><h2>{name}</h2></dev>
                <dev className="img-sec"><img src={image} /></dev>
                </Link>
                </div>
            
        )
}
export default Pokemon;