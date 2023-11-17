export const get= async(url)=>{
    try {
        const respuesta= await fetch(url)
        
        if (!respuesta.ok) {
            throw new Error(respuesta.status+"error en fecth"+ respuesta.statusText)
        }
        const data= await respuesta.json()
    
    return data;
    
    } catch (error) {
        console.log(`error cath de get ${error}`)
    }
    }
    
    export const post= async (url,data)=>{
    const fechConfig={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }
    
    
        try {
            const respuesta= await fetch(url,fechConfig)
            
            if (!respuesta.ok) {
                throw new Error(respuesta.status+"error en fecth [post hhtp]"+ respuesta.statusText)
            }
            const datos= await respuesta.json()
        
        return datos;
        
        } catch (error) {
            console.log(`error cath de get [POST HTTPS]${error}`)
        }
    }
    
    export const delet= async (url)=>{
        const fechConfig={
            method:"DELETE",
        }
        
            try {
                const respuesta= await fetch(url,fechConfig)
                
                if (!respuesta.ok) {
                    throw new Error(respuesta.status+"error en fecth [post hhtp]"+ respuesta.statusText)
                }
                const datos= await respuesta.json()
            
            return datos;
            
            } catch (error) {
                console.log(`error cath de get [POST HTTPS]${error}`)
            }
        }
    
        
        export const put = async (url, data) => {
            const fetchConfig = {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            }
        
            try {
                const respuesta = await fetch(url, fetchConfig)
        
                if (!respuesta.ok) {
                    throw new Error(respuesta.status + " error en fetch [put http] " + respuesta.statusText)
                    console.log(respuesta)
                }
        
                // Manejar la respuesta JSON y retornarla
                const datos = await respuesta.json()
                return datos;
        
            } catch (error) {
                console.log(`Error catch de put [PUT HTTP]: ${error}`)
                throw error; // Puedes lanzar el error nuevamente para que el componente que llama a esta función lo maneje.
            }
        }