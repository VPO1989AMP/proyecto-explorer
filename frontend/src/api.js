export async function getBlock({ queryKey }){
    const [, bloque] = queryKey;
    console.log(bloque)
    const response = await fetch(`http://localhost:5555/bloque/${bloque}`)
    const data = await response.json()
    return data
}

export async function getTx({ queryKey }){
    const [, tx] = queryKey;
    console.log(tx)
    const response = await fetch(`http://localhost:5555/tx/${tx}`)
    const data = await response.json()
    return data
}

export async function getBalance({ queryKey }){
    const [, address] = queryKey;
    console.log(address)
    const response = await fetch(`http://localhost:5555/balance/${address}`)
    const data = await response.json()
    return data
}