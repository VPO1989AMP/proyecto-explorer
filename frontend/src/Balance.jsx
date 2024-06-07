import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import {getBalance} from './api.js'

export function Balance(){
    const params = useParams()
    const {isLoading,isError,data} =useQuery(['balance',params.address],getBalance)
    if (isLoading){
        return <h1>Cargando...</h1>
    }
    if (isError){
        return <h1>Error</h1>
    }
    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Wallet</th>
                    <td>{params.address}</td>
                </tr>
                <tr>
                    <th>Balance</th>
                    <td>{data.balance}</td>
                </tr>
            </thead>
        </table>
        {JSON.stringify(data, null, 4)}
    </div>
}