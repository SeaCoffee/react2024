import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostPage from "./pages/PostPage";
import PostDetailsPage from "./pages/PostDetailsPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    {
                        path: ':id',
                        element: <UserDetailsPage />,
                        children: [
                            {
                                path: 'posts',
                                element: <PostPage />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'posts/:postId',
                element: <PostDetailsPage />
            }
        ]
    }
])



