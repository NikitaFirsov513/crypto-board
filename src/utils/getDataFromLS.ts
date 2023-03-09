export function getDataFromLS(type: string): string | null {

    let data = window.localStorage.getItem(type);




    return data

}