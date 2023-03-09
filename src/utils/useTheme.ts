import { useState } from "react";

export function useTheme(): [string | null, () => void] {

    const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

    if (theme === "dark") {
        document.body.classList.add("dark");
    }

    const changeTheme = () => {
        document.body.classList.toggle("dark");
        document.querySelector(".ball")?.classList.toggle("ball--right");

        if (theme === "dark") {
            window.localStorage.setItem("theme", "light");
            setTheme('light');
        } else {
            window.localStorage.setItem("theme", "dark");
            setTheme('dark');
        }
    };
    return [theme, changeTheme]
}