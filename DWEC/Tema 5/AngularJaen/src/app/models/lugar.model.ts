export class lugarModel {

    constructor (
        public id: string,
        public nombre: string,
        public tipo: string,
        public descripcion: string,
        public imagen: Array<string>,
        public logo: string
    ) {}
    
}