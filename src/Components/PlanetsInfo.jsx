import { useParams } from "react-router-dom";
import data from "../data.json"



const PlanetsInfo = () => {

    const {name} = useParams();
    const planets = data.filter((item) => item.name === name);
    console.log(planets);


    return(
        <div className="planets-info-wrapper">
            <h1>{planets[0].name}</h1>
            <p>{planets[0].overview.content}</p>
            <p>Source: <a href={planets[0].overview.source} style={{fontWeight: 'bold', textDecoration: 'underline', color: 'white', cursor: 'pointer'}}>Wikipedia</a>
            </p>
        </div>
    )
};

export default PlanetsInfo;