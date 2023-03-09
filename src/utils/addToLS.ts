export function addToLS(type: string, val: string) {

    const prevVal = window.localStorage.getItem(type)


    if (prevVal === null || prevVal === '')
        window.localStorage.setItem(type, val)
    else
        window.localStorage.setItem(type, (prevVal + ', ' + val))
    console.log(window.localStorage.getItem(type))
}