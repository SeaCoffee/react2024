
export const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'

const posts = '/posts'


export const endpoints = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },

    posts: {
        base: posts,
        byId: (postId) => `${posts}/${postId}`,
        byUserId: (userId) => `${posts}?userId=${userId}`
    }
}
