const fetchUserBlog = userBlogId => {
    return fetch(`https://api.github.com/users/${userBlogId}`)
        .then(response => response.json());
};

export const getUsersBlogs = async usersBlogs => {
    let promises = [];

    usersBlogs.forEach(userBlogId => {
        let promise = new Promise((resolve, reject) => {
            try {
                resolve(
                    fetchUserBlog(userBlogId)
                        .then(userBlogData => userBlogData.blog)
                );
            } catch(err) {
                reject();
            }
        });

        promises.push(promise);
    });

    return await Promise.all(promises);
};

getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));
