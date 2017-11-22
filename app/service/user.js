module.exports = app => {
    class User extends app.Service {
        async find(uid) {
            return await new Promise((resolve) => resolve('Ethan'));
        }
    }
    return User;
};
