export function imprimir(...objetos: Array<any>): void {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto())
    }
}