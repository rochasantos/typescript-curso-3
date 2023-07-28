export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`___Método: ${propertyKey}`);
        console.log(`___parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`___retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
