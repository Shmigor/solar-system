import Header from "../Components/Header";
import solar from "../assets/solar.png";

const Homepage = ({planets, setPlanets}) => {
    return (
        <div className="homepage">
            <Header planets={planets}/>
            <div className="solar-system">
                <img src={solar} alt="solar-system" />
            </div>
        </div>
    )
};

export default Homepage;