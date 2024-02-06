const baseURL = 'https://jsonplaceholder.typicode.com'
const posts = '/posts'

const urls = {
    base: baseURL,
    posts,
    byId: (id) => `${posts}/${id}`
}

export default urls;
