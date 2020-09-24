const fetchUserBlogId = async userBlogId => {
    return await fetch(`https://api.github.com/users/${userBlogId}`)
        .then(res => res.json());
};

export const getUsersBlogs = usersBlogs => {
    let blogUsers = [];

    usersBlogs.forEach(userBlogId => {
        try {
            blogUsers.push(fetchUserBlogId(userBlogId));
        } catch(err) {
            return;
        }
    });

    return Promise.all(blogUsers);
};

getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));
