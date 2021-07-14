//a)
// entrada = numeros
//saida = estaticas

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

