
export const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'

const albums = '/albums'

const comments = '/comments'

const posts = '/posts'


export const endpoints = {
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    },
    todos: {
        base: todos
    },
    albums: {
        base: albums
    },
    posts: {
        byId: (postId) => `${posts}/${postId}`
    }
}
