export function deleteFromLS(type: string, val: string) {

    let mas = window.localStorage.getItem(type)?.split(', ');
    mas = mas?.filter((elem) => elem !== val);
    const newVal = mas?.join(', ');
    console.log(newVal);
    if (newVal !== undefined)
        localStorage.setItem(type, newVal);

}