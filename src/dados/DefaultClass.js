export default class DefaultClass{
    
    inscrever(func){
        this._inscritos.push(func)
    }
   
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f=> f!==func   )
    }
    
    notificar(){
        this._inscritos.forEach(func =>{
            func(this.notas)
        })
    }
}