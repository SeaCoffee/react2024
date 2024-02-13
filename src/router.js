import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import AlbumsPage from "./pages/AlbumsPage";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'albums', element: <AlbumsPage/> },
            { path: 'comments', element: <CommentsPage/>, children: [{path: 'post', element: <PostPage/>}] },
            { path: 'todos', element: <TodosPage/> }

        ]
    },
])
