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

export class UserRepository extends User {
    constructor(users) {
        super(id, name, sessionId);
        Object.freeze(users);
        this._users = users;
    }

    getUserNames() {
        return this._users[this._name];
    }

    getUserIds() {
        return this._users[this._id];
    }

    getUserNameById() {
        return this._users[this._id];
    }
}

const userRepository = new UserRepository([{ id : '1', name : 'Tom', sessionId : 'session-id' }, { id : '2', name : 'Bob', sessionId : 'session-id' }]);
