import { AuthService } from "../service/authService.js";

export class AuthController {

    static signup = async (req, res) => {
        const { userId, password } = req.body;
        const userInfo = { userId, password };

        const isExistedUser = AuthService.selectUser(userInfo.userId);
        // 회원가입 실패 - 이미 존재하는 아이디
        if (isExistedUser === true) return res.status(400).send(`userId: ${userInfo.userId} is existed`);

        AuthService.createUser(userInfo);

        res.status(200).send("sign up success");
    }

    static login = async (req, res) => {
        const { userId, password } = req.body;
        const userInfo = { userId, password };

        const isExistedUser = AuthService.selectUser(userInfo.userId);
        // 로그인 실패 - 아이디가 일치하지 않은 경우
        if (isExistedUser === false) return res.status(400).send(`userId: ${userInfo.userId} is not existed`);

        const loginResult = AuthService.login(userInfo);
        // 로그인 실패 - 비밀번호가 일치하지 않은 경우
        if (loginResult === false) return res.status(400).send(`password mismatched`);
        // 로그인 성공
        res.status(200).send("login success");
    }

}