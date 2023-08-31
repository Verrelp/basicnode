const model = require('../model/animal')
class MamaliaService {
    constructor() {
        this.mamaliaModel = new model.Mamalia();
    }
    getSuara() {
        this.mamaliaModel.suaraAnimal();
    }
}

module.exports = MamaliaService

// 3 cara import : model.blabla , const {Mamalia} < memanggil 2 class , const namaClass = require (file) < cara manggil 1
//