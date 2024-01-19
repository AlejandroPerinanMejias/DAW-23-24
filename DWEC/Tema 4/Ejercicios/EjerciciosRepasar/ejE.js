class CaesarCipher {
    ABC = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    saltos;
    constructor(saltos) {
        this.saltos = saltos;
    }

    encode(userText) {
        let text = userText.split("");
        let text_encoded = "";
        for (let i = 0; i < text.length; i++) {
            text_encoded += this.ABC[this.ABC.indexOf(text[i])+this.saltos];
        }
        return text_encoded;
    }

    decode(text_encoded) {
        let text = text_encoded.split("");
        let text_decoded = "";
        for (let i = 0; i < text.length; i++) {
            text_decoded += this.ABC[this.ABC.indexOf(text[i])-this.saltos];
        }
        return text_decoded;
    }
}

let cifrado = new CaesarCipher(5);
let text_encoded = cifrado.encode("hola");
let text_decoded = cifrado.decode(text_encoded);

console.log(text_encoded);
console.log(text_decoded);