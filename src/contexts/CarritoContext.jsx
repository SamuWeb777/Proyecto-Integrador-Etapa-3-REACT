import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from "../utils/http";



const CarritoContext = createContext()


const url = 'http://localhost:8080/carrito'


const CarritoProvider = ({ children }) =>{
    const [agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito] = useLocalStorage('carrito',[])
    function elProductoEstaEnElCarrito(producto){
        return carrito.filter(prod=>prod.id===producto.id).length
    }
    function obtenerProductoDeCarrito(producto){
    
        return carrito.find(prod=>prod.id===producto.id)
    }
    //ESTADO
    const agregarCarritoContext = (producto)=>{
        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            guardarCarrito(carrito)
        }
    }
    const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
        try {
            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.log('[cambiarCantidadCarritoContext]: No se pudo guardar el producto con la nueva cantidad', error)
        }
    }
    const eliminarProductoCarritoContext = (id) =>{
        eliminarDelCarrito(id)
    }
    const guardarCarritoContext = async () => {
        console.log("se esta procesando")
        try {
            const carritoGuardado = await post(url, carrito)
            console.log(carritoGuardado)
        } catch (error) {
            console.error('[guardarCarritoContext]: No se pudo guardar el carrito', error)
        }
    }
    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }
    const cantidadArticulosCarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + producto.cantidad
        }, 0)
        return sumaTotal
    }
    const precioTotalArticulosCarritoSinIVA = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        }, 0)
        return sumaTotal
    }
    const precioTotalArticulosCarrito=()=>{
        let sumaTotal=carrito.reduce((total,producto)=>{
            return total+ (producto.precio*producto.cantidad)+((producto.precio*producto.cantidad)*0.21)
        },0)
        return sumaTotal
    }
    const productoSinIva=()=>{
        let sumaTotal=carrito.reduce((total,producto)=>{
            return total+ (producto.precio*producto.cantidad)
        },0)
        return sumaTotal*0.21
    
    }
    const data  =   {carrito, agregarCarritoContext, eliminarProductoCarritoContext, guardarCarritoContext, 
        vaciarCarritoContext, 
        cantidadArticulosCarritoContext,
        precioTotalArticulosCarrito,
        cambiarCantidadCarritoContext,
        guardarCarritoContext,
        productoSinIva,
        precioTotalArticulosCarritoSinIVA
    }
    return<CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
export {CarritoProvider}
export default CarritoContext


