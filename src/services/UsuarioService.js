import CarrosApiService from './CarrosApiService';

export default class UsuarioService extends CarrosApiService {
    async login(dadosDoUsuario) {
        const {data} = await this.post("/usuarios/login", dadosDoUsuario);
        localStorage.setItem("token", data.token);
    }

    async logout() {
        localStorage.removeItem("token");
    }

    estaAutenticado() {
        return localStorage.getItem('token') !== null;
    }
};