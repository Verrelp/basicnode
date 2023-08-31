const Mamalia = require("../model/animal")
class MamaliaService{
    constructor(){
        this.mamaliaModel = new Mamalia()
    }
    getSuara(){
        this.mamaliaModel.suaraAnimal()
    }
    async getAll(){
        return await this.mamaliaModel.findAll()
    }
    async store(body){
        if (body.type=="Mamalia") {
           const mamalia = new Mamalia(body.name, body.type, body.habitat)
            await this.mamaliaModel.save(mamalia)
        } else{console.log("Hewan lu anomali");}
            
    
    }
}
module.exports = MamaliaService

// 3 cara import : model.blabla , const {Mamalia} < memanggil 2 class , const namaClass = require (file) < cara manggil 1
//