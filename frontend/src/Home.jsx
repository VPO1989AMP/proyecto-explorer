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
        <h3>Explorador de la cadena de Ethereum</h3>
            <form onSubmit={handleSubmit(submitForm)}>
                <input {...register("data")}></input>
                <button className="btn btn-primary">GO</button>
            </form>
        <Outlet></Outlet>
    </div>
}