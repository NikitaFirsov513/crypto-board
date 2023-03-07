import { TSymbolList } from "./sumbolList";

export function changeSymbolList(mas: TSymbolList, str: string) {


    let newMas: TSymbolList = []


    mas.forEach((elem) => {

        const isName = elem.name.indexOf(str)
        const isSymbol = elem.symbol.indexOf(str)


        if (isName !== -1 || isSymbol !== -1)
            newMas.push(elem);
    })
    console.group('changeSymbolList')
    console.log({ str })
    console.groupEnd()
    return newMas;
}