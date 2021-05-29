import DefaultClass from "./DefaultClass"

export default class Categoria extends DefaultClass{
    constructor(){
        super()
        this.categorias = []
        this._inscritos = []
    }

    inscrever(func){
        this._inscritos.push(func)
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias)
        })
    }

    adicionarCategoria(categoria){
        this.categorias.push(categoria)
        this.notificar()
    }
}