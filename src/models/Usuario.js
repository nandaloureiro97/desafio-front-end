export default class Usuario {
    constructor(obj) {
        obj = obj || {};

        this.id = obj.id;
        this.email = obj.email;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.avatar = obj.avatar;
    }
}