import { useState } from "react"

export const useLocalStorage = (clave, valorInicial=[]) =>{
    //Tiene que usar alguno de los hooks de react
    const getvalorAlmacenado = () =>{
        try {
            const valorAlmacenadoLS=window.localStorage.getItem(clave)
            return valorAlmacenadoLS ? JSON.parse(valorAlmacenadoLS):valorInicial
        } catch (error) {
            console.log(`error en obtener la clava de local storage ${error}`)
            return valorInicial
        }
    }
    const [valorAlmacenado, setvalorAlmacenado] = useState(getvalorAlmacenado())

    const guardarValoresLS=(valores)=>{
        try {
            setvalorAlmacenado(valores)
            window.localStorage.setItem(clave,JSON.stringify(valores))  
        } catch (error) {
            console.log("eeror al guarda valores localstorege")
        }
        }
        const guardarValorLS=(valorNuevo)=>{
            try {
                const nuevoValorAlmacenado=[...valorAlmacenado,valorNuevo]
                setvalorAlmacenado(nuevoValorAlmacenado)
                window.localStorage.setItem(clave,JSON.stringify(nuevoValorAlmacenado))
            } catch (error) {
                console.loh(`Error en guardar localstrare ${error}`)
            }
        }
        const eliminarValorLS=(id)=>{
            try {
                
                const nuevoValorAlmacenado=[...valorAlmacenado]
                const indice=nuevoValorAlmacenado.findIndex((item)=>item.id===id)
                nuevoValorAlmacenado.splice(indice,1)
                setvalorAlmacenado(nuevoValorAlmacenado)
                window.localStorage.setItem(clave,JSON.stringify(nuevoValorAlmacenado))
            } catch (error) {
                console.error("error eleminarvalorLS() "+ error)
                
            }
        }
        const limpiarLS=()=>{
            window.localStorage.clear()
            window.localStorage.setItem(clave,JSON.stringify(valorInicial))
            setvalorAlmacenado(valorInicial)
        }
        return [guardarValorLS,eliminarValorLS,limpiarLS,guardarValoresLS, valorAlmacenado]

}