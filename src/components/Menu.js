import { Link } from "react-router-dom";


export const Menu = () => {
    return (
        <div>

            <Link to='/albums'>Albums</Link>
            <Link to='/comments'>Comments</Link>
            <Link to='/todos'>Todos</Link>
        </div>
    );
}
