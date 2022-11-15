const Header = ({planets}) => {
    return(
        <div className="navigation">
            <h1 className="navigation-logo">the planets</h1>
            <nav className="navigation-planets-container">
                
                    {
                        planets.map((planets) =>
                        {return(
                            <button className="navigation-planets-btn">{planets.name}</button>
                        )}
                        )
                    }
                
            </nav>
        </div>
    )
};

export default Header;