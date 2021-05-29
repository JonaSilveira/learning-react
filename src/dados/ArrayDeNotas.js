import DefaultClass from "./DefaultClass"

export default class ArrayDeNotas extends DefaultClass{
    constructor(){
        super()
        this._inscritos = []
        this.notas = []
    }
 
    criarNota(titulo, texto, categoria){ 
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
        this.notificar()
    }

    apagarNota(index){
        this.notas.splice(index, 1);
        this.notificar()
    }

} 

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}