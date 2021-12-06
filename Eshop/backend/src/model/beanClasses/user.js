class User
{
    constructor(obj)
    {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.contactNo = obj.contactNo;
    }
}

module.exports = User;