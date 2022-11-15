import Header from "../Components/Header";



const Main = ({planets, setPlanets}) => {
    return(
        <div className="homepage">
            <Header planets={planets}/>
           
        </div>
    )
};

export default Main;