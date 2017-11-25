import Mock from 'mockjs';
import icon from '@/assets/logo.png';

const LoginUsers = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: icon,
        name: 'Soong',
    },
];

const Users = [];
for (let i = 0; i < 100; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        gender: Mock.Random.integer(0, 1),
    }));
}


export { LoginUsers, Users };

