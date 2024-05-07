/* 
Requerimientos generales:
Atienda a los requerimeintos listados a continuacion. Cree un archivo index.html y un archivo main.js vinculados para este desafio.

Requerimientos específicos:
1.- Declare una clase llamada Usuario con un metodo constructor en ella. Establezca los siguientes atributos o propiedades: nombre, correo, status, score, tipoDeUsuario.

2.- Declare una clase llamada Juego con un metodo constructor en ella. Establezca los siguientes atributos o propiedades: tipoDeJuego, nombre, nroDeNiveles, nroDeJugadores

3.- En la clase Usuario el metodo constructor debe requerir por parametros los valores para inicializar los atributos de la clase. Con excepcion del atributo "score"

4.- En la clase Juego el metodo constructor debe requerir por parametros los valores para inicializar los atributos de la clase.

5.- En la clase Usuario crear metodos para:
-inicializar el atributo "score", el valor inicial debe ser recibido por parametro.
-otro metodo para setear el atributo "score" este metodo debe recibir por parametros el score actual, la operacion a realizar (sumar, restar, multiplicar o dividir) y el valor en cuestion Este metodo debe retornar (return) el nuevo valor del "score". EJ: updateScore(score, operacion, value){ }
*/

class Usuario {
    constructor(nombre, correo, status, tipoDeUsuario){
        this.nombre = nombre;
        this.correo = correo;
        this.status = status;
        this.tipoDeUsuario = tipoDeUsuario;
    }

    InicializarScore(valorInicial) {
        this.score = valorInicial;
    }

    SetearScore(operacion, valor) {
        switch (operacion) {
            case 'sumar':
                this.score += valor;
                break;
            case 'restar':
                this.score -= valor;
                break;
            case 'multiplicar':
                this.score *= valor;
                break;
            case 'dividir':
                this.score /= valor;
                break;
            default:
                break;
        }
        return this.score;
    }
}

class Juego {
    constructor(tipoDeJuego, nombre, nroDeNiveles, nroDeJugadores) {
        this.tipoDeJuego = tipoDeJuego;
        this.nombre = nombre;
        this.nroDeNiveles = nroDeNiveles;
        this.nroDeJugadores = nroDeJugadores;
    }
}

const usuario = new Usuario("Nombre", "Correo", "Status", "Tipo de Usuario");

function inicializar() {
    usuario.InicializarScore(Number(document.getElementById("InicializarScore").value));
    document.getElementById("score").innerHTML = usuario.score;
}

function operacion(operacion, event) {
    event.preventDefault();
    let auxOperacion = operacion.id;
    let auxValor = Number(document.getElementById("valor").value);
    usuario.SetearScore(auxOperacion, auxValor);
    document.getElementById('score').innerText = usuario.score;
}
