import {useState, useEffect} from "react";
import Ship from "../ship/ship";
import shipServices from "../../services/shipServices";


export function GetShips(index) {
    const [ships, setShips] = useState([])


    useEffect(() => {
        shipServices.getShips().then(value => value.data).then(value => setShips(value))
    }, [])


    return (
        <div>
            {ships.filter(ship => parseInt(ship.launch_year) !== 2020).map((ship, index) => (
                <Ship key={index} ship={ship} />
            ))}
        </div>

    )
}
