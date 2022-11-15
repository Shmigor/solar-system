import Content from "../Components/Content";
import Header from "../Components/Header";



const Main = ({planets, setPlanets}) => {
    return(
        <div className="main">
            <Header planets={planets}/>
           <Content planets={planets} setPlanets={setPlanets}/>
        </div>
    )
};

export default Main;