const usersMock = [{

        username: "nmonllor",
        password: "123456"
    },
    {
        username: "ramon",
        password: "123456"

    },
    {
        username: "admin",
        password: "admin"

    },
]

export default class UsersServiceMock {
    async getUsers() {
        return Promise.resolve(usersMock);
    }

}