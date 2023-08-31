class MamaliaService {
    constructor(mamaliaModel) {
        this.mamaliaModel = new Mamalia();
    }
    getSuara() {
        this.mamaliaModel.suaraAnimal();
    }
}