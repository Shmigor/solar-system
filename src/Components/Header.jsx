import { Link, useNavigate } from "react-router-dom";

const Header = ({planets}) => {

const navigate = useNavigate();

    return(
        <div className="navigation">
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">
                <h1 className="navigation-logo">the planets</h1>
            </Link>
            <nav className="navigation-planets-container">
                
                    {
                        planets.map((planets) =>
                        {return(
                            <button key={planets.name} onClick={() => navigate(`/${planets.name}`)} className="navigation-planets-btn">{planets.name}</button>
                        )}
                        )
                    }
                
            </nav>
        </div>
    )
};

export default Header;