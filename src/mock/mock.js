import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/users';

let _Users = Users;


export default {

    initilizeMock: () => {
        const mock = new MockAdapter(axios);

        mock.onGet('/success').reply(200, {
            msg: 'success',
        });

        mock.onGet('/error').reply(500, {
            msg: 'failure',
        });

        mock.onPost('/login').reply((config) => {
            // post required to use config.data to get client packed data
            const { username, password } = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    const hasUser = LoginUsers.some((u) => {
                        if (u.username === username && u.password === password) {
                            user = JSON.parse(JSON.stringify(u));
                            user.password = undefined;
                            return true;
                        }
                    });

                    if (hasUser) {
                        resolve([200, { code: 200, msg: '请求成功', user }]);
                    } else {
                        resolve([200, { code: 500, msg: '账号或密码错误' }]);
                    }
                }, 1000);
            });
        });


        // 获取用户列表
        mock.onGet('/user/list').reply((config) => {
            const { filters } = config.params;
            const mockUsers = _Users.filter((user) => {
                if (filters && user.name.indexOf(filters.name) == -1) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        users: mockUsers,
                    }]);
                }, 1000);
            });
        });

        // 获取用户列表（分页）
        mock.onGet('/user/listpage').reply((config) => {
            // get just get the original client packed data
            const { page, filters } = config.params;
            let mockUsers = _Users.filter((user) => {
                if (filters && user.name.indexOf(filters.name) === -1) return false;
                return true;
            });
            const total = mockUsers.length;
            mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        total,
                        users: mockUsers,
                    }]);
                }, 1000);
            });
        });

        // 删除用户
        mock.onGet('/user/remove').reply((config) => {
            const { id } = config.params;
            _Users = _Users.filter(u => u.id !== id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功',
                    }]);
                }, 500);
            });
        });

        // 批量删除用户
        mock.onGet('/user/batchremove').reply((config) => {
            let { ids } = config.params;
            ids = ids.split(',');
            _Users = _Users.filter(u => !ids.includes(u.id));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功',
                    }]);
                }, 500);
            });
        });

        // 编辑用户
        mock.onGet('/user/edit').reply((config) => {
            const { id, name, addr, age, birth, gender } = config.params;
            _Users.some((u) => {
                if (u.id === id) {
                    u.name = name;
                    u.addr = addr;
                    u.age = age;
                    u.birth = birth;
                    u.gender = gender;
                    return true;
                }
                return false;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '编辑成功',
                    }]);
                }, 500);
            });
        });

        // 新增用户
        mock.onGet('/user/add').reply((config) => {
            const { name, addr, age, birth, gender } = config.params;
            _Users.push({
                name,
                addr,
                age,
                birth,
                gender,
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '新增成功',
                    }]);
                }, 500);
            });
        });
    },
};
