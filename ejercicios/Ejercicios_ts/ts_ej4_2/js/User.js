var User = /** @class */ (function () {
    function User(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.isLogged = false;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isLogged", {
        get: function () {
            return this._isLogged;
        },
        set: function (flag) {
            this._isLogged = flag;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.printInfo = function () {
        console.log("Nombre:" + this.name + " email:" + this.email + " logged:" + this.isLogged);
    };
    return User;
}());
