import {Outlet} from "react-router-dom";
import UsersPage from "../pages/UsersPage";




export const MainLayout = () => {
    return (
        <div>

            <Outlet/>
    </div>
    )
}