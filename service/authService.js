import bcrypt from 'bcrypt';
const salt = 10;

export class AuthService {
    // 회원가입 시 유저 정보를 저장하는 배열 users
    static users = [];

    static createUser = async (userInfo) => {
        // 비밀번호 해시
        const hashedPassword = await bcrypt.hash(userInfo.password, salt);
        userInfo.password = hashedPassword;
        // users 배열에 새로운 유저 추가
        this.users.push(userInfo);
    }

    static login = (userInfo) => {
        const user = this.users.filter((user) => user.userId === userInfo.userId)[0];
        // 비밀번호 일치 확인
        const result = bcrypt.compareSync(userInfo.password, user.password);
        return result;
    }

    static selectUser = (userId) => {
        const user = this.users.filter((user) => user.userId === userId);
        // 일치하는 유저가 없는 경우 false 반환
        if (user.length === 0) return false;
        else return true;
    }
}