import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import {getBlock} from './api.js'


export function Bloque(){
    const params = useParams()
    const {isLoading,isError,data} =useQuery(['bloque',params.bloque],getBlock)
    //Acceder al servidor para obtener los datos del bloque
    if (isLoading){
        return <h1>Cargando...</h1>
    }
    if (isError){
        return <h1>Error</h1>
    }
    return <div>
        Bloque {params.bloque}
        {JSON.stringify(data, null, 4)}
    </div>
}