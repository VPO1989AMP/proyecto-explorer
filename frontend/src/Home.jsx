import { Outlet, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"

export function Home(){
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm()
    const submitForm = (data) => {
        console.log(data.data);
    
        if (data.data.length == 66) {
            // Tx
            console.log("tx");
            navigate(`tx/${data.data}`);
        }
        if (data.data.length == 42) {
            // Balance
            console.log("balance");
            navigate(`balance/${data.data}`);
        }
        if (/^\d+\.?\d*$/.test(data.data)) {
            // Es un número. Bloque
            navigate(`bloque/${data.data}`);
        }
    };
    
    return <div className="container"> 
        <h3 className="text-center">Explorador de la cadena de Ethereum</h3>
            <form className='d-flex justify-content-center gap-1' onSubmit={handleSubmit(submitForm)}>
                <input className="container" {...register("data")} size={70}></input>
                <button className="btn btn-primary">GO</button>
            </form>
        <div className="border my-3 p-2">
            <Outlet></Outlet>
        </div>
    </div>
}