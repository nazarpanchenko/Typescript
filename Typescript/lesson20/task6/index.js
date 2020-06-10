export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get userId() {
        return this._id;
    }

    get userName() {
        return this._name;
    }

    get userSessionId() {
        return this._sessionId;
    }
}

const user = new User('1', 'Tom', 'session-id');

export class UserRepository {
    constructor(users) {
        Object.freeze(users);
        this._users = users;
    }

    getUserNames() {
        let userNames = [];

        for (let user in this._users) {
            userNames.push(this._users[user.name]);
        }

        return userNames;
    }

    getUserIds() {
        let userIds = [];

        for (let id in this._users) {
            userIds.push(this._users[user.id]);
        }

        return userIds;
    }

    getUserNameById() {
        return this._users[user.name];
    }
}

const userRepository = new UserRepository([{ id : '1', name : 'Tom', sessionId : 'session-id' }, { id : '2', name : 'Bob', sessionId : 'session-id' }]);
