class Veiculo {
    constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    }

    acelerar() {
    console.log(`${this.modelo} acelerando...`);
    }

    frear() {
    console.log(`${this.modelo} freando...`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
    super(marca, modelo);
    this.cor = cor;
    }

    abrirPorta() {
    console.log(`${this.modelo} abrindo a porta...`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, tipo) {
    super(marca, modelo);
    this.tipo = tipo;
    }

    empinar() {
    console.log(`${this.modelo} empinando...`);
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 'Prata');
const moto1 = new Moto('Yamaha', 'MT09', 'Naked');
const carro2 = new Carro('Honda', 'Civic', 'Branco');

carro1.acelerar();
moto1.frear();
carro2.abrirPorta();

console.log(carro1);
console.log(moto1);
console.log(carro2);