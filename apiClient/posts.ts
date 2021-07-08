import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";
export const fetchPosts = () => axios.get(url);
export const fetchPost = (id: string) => axios.get(`${url}/${id}`);
