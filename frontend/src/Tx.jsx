import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import {getTx} from './api.js'

export function Tx(){
    const params = useParams()
    const {isLoading,isError,data} =useQuery(['tx',params.tx],getTx)
    if (isLoading){
        return <h1>Cargando...</h1>
    }
    if (isError){
        return <h1>Error</h1>
    }
    return <div>
        
        {JSON.stringify(data, null, 4)}
    </div>
}