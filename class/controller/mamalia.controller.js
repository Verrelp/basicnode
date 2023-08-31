class MamaliaController {
    constructor(mamaliaService) {
        this.mamaliaService = new MamaliaService();
    }
    getSuara() {
        this.mamaliaService.getSuara();
    }
}