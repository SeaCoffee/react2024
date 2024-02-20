import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import EpisodePage from "./pages/EpisodePage";
import CharacterPage from "./pages/CharacterPage";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/episode'} />
            },
            {
                path: 'episode',
                element: <EpisodePage />,
                children: [
                    {
                        path: ':episodeId/characters',
                        element: <CharacterPage />
                    }
                ]
            }
        ]
    }
])
