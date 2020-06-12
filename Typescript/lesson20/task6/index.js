export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
}

const user = new User('1', 'Tom', 'session-id');

export class UserRepository {
    constructor(users) {
        this._users = users;
        Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        let userNames = [];

        for (let user in this._users) {
            userNames.push(this._users[user].name);
        }

        return userNames;
    }

    getUserIds() {
        let userIds = [];

        for (let user in this._users) {
            userIds.push(this._users[user].id);
        }

        return userIds;
    }

    getUserNameById(userId) {
        let userName = '';

        for (let user in this._users) {
            if (this._users[user].id === userId) userName = this._users[user].name;
        }

        return userName;
    }
}

const userRepository = new UserRepository(
    [
        { id : '1', name : 'Tom', sessionId : 'session-id' }, 
        { id : '2', name : 'Bob', sessionId : 'session-id' }
    ]
);
