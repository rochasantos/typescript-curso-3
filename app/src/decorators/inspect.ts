export function inspect (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`___Método: ${propertyKey}`)
        console.log(`___parâmetros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args);
        console.log(`___retorno: ${JSON.stringify(retorno)}`)
        
        return retorno;
    }
    return descriptor;
}
