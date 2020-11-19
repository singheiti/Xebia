import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Overlay from "./Overlay";

const Search = (props) => {

    const [planetDetails, setPlaneDetails] = useState([]);
    const [search, setSearch] = useState("");
    const [showList, setShowList] = useState(false);
    const [focus, setFocus] = useState(false);
    const [numOfSearch, setNumOfSearch] = useState(15);
    const [showPlanet, setShowPlanet] = useState(false);
    const [showPlanetDetails, setShowPlanetDetails] = useState({});
    const [seconds, setSeconds] = useState("60");
    
    // useEffect(() => {alert(numOfSearch)},[numOfSearch])
    useEffect(() => {
        if(seconds > 0 && seconds < 60) {
            setTimeout(() => {
                var sec = seconds;
                sec = sec - 1;
                setSeconds(sec);
            }, 1000)
        }
        if(seconds <= 0) {
            setFocus(true);
            setShowList(false);
        }
    }, [seconds]);

    useEffect(() => {
        if(numOfSearch <= 0) {
            setFocus(true);
            setShowList(false);
        }
    }, [numOfSearch])


    const startTimer = () => {
        var sec = seconds;
        sec -= 1;
        setSeconds(sec);
    }

    useEffect(() => {
        setPlaneDetails(props.planets);
    }, [props.planets])

    useEffect(() => {
        var list = props.planets.filter(item => {
            if(item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
            }
        })

        setPlaneDetails(list);
    }, [search])

    const getAllPlanets = async() => {
        await props.getAllPlanets();
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {setShowList(!showList)}
    
    return (
        <div style={{marginLeft: "20%", marginRight:"20%"}}>
            <Overlay />

            <div>
                <span>Number of Searches left: <br/> {numOfSearch}</span> <br/>
                <span> Time Left: <br /> {seconds} s </span>
            </div>
            
            <input type="text" 
                placeholder="Search for planets.." 
                title="Type in a name" value={search} 
                onChange={handleChange}
                style={{width:"-webkit-fill-available"}}
                onClick={handleClick}
                disabled={focus}
            />
        {showList ? props.fetchPlanetDetails ? <Loader /> : <div>
            {planetDetails.map((item, index) => {
                return <div 
                        key={index} 
                        style={{border: "1px solid black"}}
                        onClick={() => {
                            var nos = numOfSearch;
                            setShowPlanetDetails(item); 
                            setShowPlanet(true);
                            nos = nos-1;
                            if(numOfSearch === 15) {
                                startTimer();
                            }
                            if(nos < 0 || seconds === 0) {
                                setFocus(true);
                                setShowList(false);
                            }
                            else { 
                                setNumOfSearch(nos);    
                            }
                        }}
                       >{item.name}</div>
            })}
        </div>
         : null}

         {showPlanet ? 
            <div className="planet-details-div">
                Name : {showPlanetDetails.name ? showPlanetDetails.name : "unknown"} <br />
                Population: {showPlanetDetails.population ? showPlanetDetails.population : "unknown"} <br />
                Rotation Period: {showPlanetDetails.rotation_period ? showPlanetDetails.rotation_period : "unknown"} <br />
                Orbital Period: {showPlanetDetails.orbital_period ? showPlanetDetails.orbital_period : "unknown"} <br />
                Diameter: {showPlanetDetails.diameter ? showPlanetDetails.diameter : "unknown"} <br />
                Climate: {showPlanetDetails.climate ? showPlanetDetails.climate : "unknown"} <br />
                Gravity: {showPlanetDetails.gravity ? showPlanetDetails.gravity : "unknown"} <br />
                Terrain: {showPlanetDetails.terrain ? showPlanetDetails.terrain : "unknown"} <br />
                Surface Water: {showPlanetDetails.surface_water ? showPlanetDetails.surface_water : "unknown"}
            </div> 
            : null}
        </div>
    )
}

export default Search;