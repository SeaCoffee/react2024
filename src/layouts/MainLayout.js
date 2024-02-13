import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu";




export const MainLayout = () => {
    return (
        <div>
            <Menu />
            <Outlet/>
    </div>
    )
}