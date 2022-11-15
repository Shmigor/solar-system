import PlanetImage from "./PlanetImage";
import PlanetsInfo from "./PlanetsInfo";

const Content = ({planets, setPlanets}) => {
    return(
        <div className="content-container-wrapper">
            <div className="planet-img">
                <PlanetImage/>
            </div>
            <div className="content-container">
                <PlanetsInfo/>
            </div>
        </div>
    )
};

export default Content;