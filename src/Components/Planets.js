import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

const Planets = (props) => {

    const [list, updateList] = useState([]);
    const search = useRef("");

    useEffect(()=> {
        getAllPlanets();
    }, [])

    const getAllPlanets = async() => {
        await props.getAllPlanets();
    }

    const handleChange = () => {
        var searchValue = search.current.value.toLowerCase();
        var arr = props.planets.filter(item => {
            if(searchValue.trim() === "" || searchValue === null ) {
                return;
            }
            else if(item.name.toLowerCase().includes(searchValue)) {
                return item;
            }
        })
        updateList(arr);
    }

    const getFontSize = (population) => {
        if (population >= 1000000000) return 'xxx-large';
        else if (population > 10000000 && population <= 10000000000) return 'x-large';
        else if (population > 100000 && population <= 10000000) return 'large';
        else if (population > 10000 && population <= 100000) return 'small';
        else if (population > 1000 && population <= 10000) return 'x-small';
        else if (population >=0 && population <= 1000) return 'xx-small';
        else { return 'medium';}
    }

    return (
        <div>
            {props.fetchPlanetDetails ? <Loader /> : (
    <div>
        <input
            placeholder="Enter a planet name"
            ref={search}
            className="planet-input"
            // style={{padding: "20px", width: "133%", fontSize: "20px"}}
            onChange={handleChange}
        />

        <br />
        <br />

        {list && list !== [] ? list.map(item => {
            return (
                <div>
            <div style={{fontSize: getFontSize(item.population), border: "1px solid black"}}>
                 {item.name} 
                 <br />
                 {item.population}
            </div>
            <br />
            <br />
            </div>
            )
        }): null}
    </div>
    )}
    </div>
    )
}

export default Planets;