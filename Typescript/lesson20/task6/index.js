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

    set setUserNames(userName) {
        this._userName = userName;
    }

    set setUserIds(userId) {
        this._userId = userId;    }

    get getUserNames() {
        return this._users;
    }

    get getUserIds() {
        return this._users[user.sessionId];
    }

    get getUserNameById() {
        return this._users[user.id];
    }
}

const userRepository = new UserRepository([{ id : '1', name : 'Tom', sessionId : 'session-id' }, { id : '2', name : 'Bob', sessionId : 'session-id' }]);
