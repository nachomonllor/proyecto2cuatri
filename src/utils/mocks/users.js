const usersMock = [{

        username: "nmonllor",
        password: "123456"
    },
    {
        username: "ramon",
        password: "123456"

    },

]

export default class UsersServiceMock {
    async getUsers() {
        return Promise.resolve(usersMock);
    }

}