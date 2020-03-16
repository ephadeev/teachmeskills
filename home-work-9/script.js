"use strict";
class User {
    static canSendMessage = true;
    #name = `Unknown`;
    #password = `Password`;

    constructor(name, password) {
        this.#name = name;
        this.#password = password;
    }

    getName() {
        return this.#name;
    }

    setName(value) {
        this.#name = value;
    }

    getPassword() {
        return this.#password;
    }

    setPassword(value) {
        this.#password = value;
    }

    sendMessage(msg) {
        console.log(msg)
    }
}

class SuperUser extends User {
    static createdUsers = [];

    constructor(name, password) {
        super(name, password);
    }

    getCreatedUsers() {
        return SuperUser.createdUsers;
    }

    createUser(name, pass) {
        SuperUser.createdUsers.push(name);
        return new User(name, pass);
    }
}

class Admin extends SuperUser {
    static deletedUsers = [];


    constructor(name, password) {
        super(name, password);
    }

    deleteUser(name, userName) {
        userName = null;
        Admin.createdUsers.forEach(function (user, index, array) {
            if (user === name) {
                array.splice(index, 1);
            }
        });
        Admin.deletedUsers.push(name);
    }

    getDeletedUsers() {
        return Admin.deletedUsers;
    }
}

var user1 = new User("Ivan", "kjkszpj");
console.log(user1.getName()); // Ivan
user1.sendMessage("Привет");

var superuser1 = new SuperUser("Evgeniy", `billmurray`);
console.log(superuser1.getName()); // Evgeniy

var user2 = superuser1.createUser("Max", "cooper");
console.log(superuser1.getCreatedUsers()); // ['Max']
console.log(user2.getName()); // Max

var admin1 = new Admin("Petrosyan", "arnoldschwarcneger");
console.log(admin1.getName()); // Petrosyan
admin1.deleteUser("Max", user2);
console.log(superuser1.getCreatedUsers()); // []
console.log(user2.getName()); // Max - почему?
console.log(admin1.getDeletedUsers()); // [`Max`]