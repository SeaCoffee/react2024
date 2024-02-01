
function RickSingle({ rick }) {
    return (
        <div>
            <h2>{rick.id}</h2>
            <h2>{rick.name}</h2>
            <h2>{rick.status}</h2>
            <h2>{rick.species}</h2>
            <h2>{rick.gender}</h2>
            <img src={rick.image}/>
        </div>
    )
}

export default RickSingle;
