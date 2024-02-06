
function Ship({ ship }) {
    const { mission_name, launch_year, mission_patch_small, flight_number } = ship

    return (
        <div>
            <h2>{mission_name}</h2>
            <h2>{launch_year}</h2>
            <h2>{mission_patch_small}</h2>
        </div>
    )
}

export default Ship;