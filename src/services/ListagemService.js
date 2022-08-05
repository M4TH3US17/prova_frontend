import CarrosApiService from "./CarrosApiService";

export default class ListagemService extends CarrosApiService {

    async carregarCards(page = 0, sort='preco,desc') {
        let url = `/carros?size=8&page=${page}&sort=${sort}`;
        return await this.get(url);
        
    }

    async carregaCardPorId(carroId) {
        let url = '/carros/'+carroId;
        return await this.get(url);
    }

    async deletaCard(idCarro) {
        let url = '/carros/'+ idCarro;
        return await this.delete(url);
    }

    async atualizarCard(idCarro, dados) {
        let url = '/carros/atualizar/' + idCarro;
        return await this.put(url, dados);
    }

    async criarCard(dados) {
        return await this.post('/carros/salvar', dados);
    }
};