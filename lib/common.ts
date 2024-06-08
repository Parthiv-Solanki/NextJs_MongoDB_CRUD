interface Post {
    id: string;
    title: string;
    description: string;
    date: Date;
}

let posts: Post[] = [{
    title: "My Post 1",
    description: "Informative Post",
    date: new Date(),
    id: "1716388146565"
},
{
    title: "My Post 1",
    description: "Informative Post",
    date: new Date(),
    id: "1716388186539"
}];

export const getPost = () => posts;

export const addPost = (post: Post) => {
    posts.push(post);
};

export const deletePost = (id: string) => {
    posts = posts.filter((post) => post.id != id);
};

export const updatePost = (id: string, title: string, description: string) => {
    let post = posts.find((post) => post.id === id);
    if (post) {
        post.title = title
        post.description = description
    } else {
        throw new Error("Post Not Found");
    }
};

export const getById = (id: string) => {
    return posts.find((post) => post.id === id) || null;
};
