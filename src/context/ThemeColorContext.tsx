import { createContext, useState } from "react";

type PropsUseContext = {
    isDarkTheme: boolean,
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_VALUE = {
    isDarkTheme: true,
    setTheme: () => {}
}

const ThemeColorContext = createContext<PropsUseContext>(DEFAULT_VALUE);

const ThemeColorProvider = (props: React.PropsWithChildren) => {
    const [isDarkTheme, setTheme] = useState(DEFAULT_VALUE.isDarkTheme);

    return(
        <ThemeColorContext.Provider
            value={{
                isDarkTheme,
                setTheme,
            }}>

            {props.children}
        </ThemeColorContext.Provider>
    )
}

export  {ThemeColorProvider}

export default ThemeColorContext

