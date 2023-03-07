import { useRef, useState } from "react";
import { changeSymbolList } from "../../utils/changeSymbolList";
import { symbolList } from "../../utils/sumbolList";

type TAddNewElementProps = {
    title: string,
    handleClick: () => void,
    show: boolean,
}

export const AddNewElement = ({ title, handleClick, show }: TAddNewElementProps) => {


    const [mas, setMas] = useState(symbolList);
    const [value, setValue] = useState('');
    const timeout = useRef<number>();


    function changeInput(inputVal: string) {
        clearTimeout(timeout.current);

        if (inputVal === undefined)
            return

        setValue(inputVal);

        
        timeout.current = setTimeout(() => {
            if (value == '') {
                setMas(symbolList);
            } else {
                setMas(changeSymbolList(symbolList, value));
            }
        }, 1000);

    }


    return (
        <>
            <button onClick={e => handleClick()} className="app__button-add" >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 17.3485V32.6118" stroke="#7D67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32.6389 24.9802H17.3611" stroke="#7D67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M34.7619 4.16666H15.2381C8.4325 4.16666 4.16663 8.9835 4.16663 15.8024V34.1976C4.16663 41.0165 8.41266 45.8333 15.2381 45.8333H34.7619C41.5873 45.8333 45.8333 41.0165 45.8333 34.1976V15.8024C45.8333 8.9835 41.5873 4.16666 34.7619 4.16666Z" stroke="#7D67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                New Asset
            </button >
            {show ?
                <div onClick={e => handleClick()} className="app__add">
                    <div onClick={e => { e.stopPropagation(); }} className="app__add-wrapper">
                        <h1>{title}</h1>
                        <input type="text" value={value} onChange={e => changeInput(e.target.value)} placeholder="placeholder" />
                        <div className="app__add-list">
                            {mas.map((elem, i) => <p key={elem.name + i}>{elem.name} ({elem.symbol}/{elem.currency})</p>)}
                        </div>
                    </div>
                </div>
                : <></>}
        </>)
}