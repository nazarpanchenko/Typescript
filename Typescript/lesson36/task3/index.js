export const parseUser = user => {
    try {
        return JSON.parse(user);
    } catch {
        return null;
    }
};
