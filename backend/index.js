const express= require("express")
const { Web3 } = require("web3");
const cors = require("cors")
const app = express();
app.use(cors());
const URL_INFURA = "https://mainnet.infura.io/v3/cd69ba0af5044acbb37d50bee8be7bb5"

const port = process.env.PORT || 5555;

const web3 = new Web3(URL_INFURA)


app.get("/bloque/:bloque",async (req,res)=>{
    try{
        const bloque = await web3.eth.getBlock(req.params.bloque)
        const convertedBlock = convertBigIntToString(bloque);
        res.send(convertedBlock);
    }catch(error){
        res.send(error)

    }
})

app.get("/tx/:tx",async (req,res)=>{
    try{
        const tx= await web3.eth.getTransaction(req.params.tx)
        deleteBigInt(tx)
        res.send(tx)
    }catch (error){
        res.send(error)
    }
})

function deleteBigInt(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'bigint') {
            obj[key] = obj[key].toString();
        }
    }
}

app.get("/balance/:address",async (req,res)=>{
    try{
        const balance = await web3.eth.getBalance(req.params.address)
        const convertedBalance = (web3.utils.fromWei(balance, 'ether')).toString()
        //console.log(convertedBalance)
        res.send({Balance:  convertedBalance})
    }catch (error){
        res.send(error)
    }

})


const convertBigIntToString = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(convertBigIntToString);
    }
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key,
            typeof value === 'bigint' ? value.toString() : convertBigIntToString(value)
        ])
    );
};





// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});