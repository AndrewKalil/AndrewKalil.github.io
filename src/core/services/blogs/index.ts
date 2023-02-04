import { BlogsApi } from "../../api/blogs";
import { BLOGS } from "../../data";

const blogsApi = new BlogsApi("blogs");

export const setBlogs = () => blogsApi.put(BLOGS);

export const getBlogs = () => blogsApi.get();
