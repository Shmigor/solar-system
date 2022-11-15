import { useParams } from "react-router-dom";
import data from "../data.json"



const PlanetImage = () => {

    const {name} = useParams();
    const planets = data.filter((item) => item.name === name);
console.log(planets);


    return(

        <div className="planet-image">
            <img src={planets[0].images.planet} alt={planets[0].name}/>
        </div>
    )
};

export default PlanetImage;