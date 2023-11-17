import { createContext, useEffect, useState } from "react";

/*CREANDO EL CONTEXTO*/
/* 1er PASO -> Creacion del contexto */
const ThemeContext = createContext()

/* 2dO PASO -> El armado del provider */
const temaInicial = "light"
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState (temaInicial)
    const handleTheme = () =>{
        ( theme === "light") ? setTheme("dark") : setTheme(temaInicial)
        document.body.setAttribute("data-bs-theme",theme)
        localStorage.setItem("modo",theme)
    }
    useEffect(() => {
      document.body.setAttribute("data-bs-theme", theme);
      localStorage.setItem("modo", theme);
    }, [theme]);

    function cargarLocalStorage(){
      let itemLS=localStorage.getItem("modo")
      if (itemLS===null) {
          localStorage.setItem("modo","light")  
          
          
      }else if(localStorage.getItem("modo")==="dark"){
          setTheme("dark")
          document.body.setAttribute("data-bs-theme","dark")
      }
     
  }
    const data = { theme, handleTheme, cargarLocalStorage }
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

/* 3er PASO -> Exportaciones */
export { ThemeProvider}
export default ThemeContext