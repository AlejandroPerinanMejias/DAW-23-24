export class UserModel{

    constructor(
        public id: number,
        public rol: string,
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: Date | null,
        public correo: string,
        public numTelefono: string,
        public genero: string,
        public comunidad: string,
        public token: string
    ) {}
}