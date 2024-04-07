
export const getData = async () =>{
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
    try {
        const res = await fetch('https://icanhazdadjoke.com',config)
        const data = await res.json()
        return data.joke
    } catch (error) {
        console.log(error)
    }
    
}

export const getDataPromise = async  () => {
    let data = ''
    const config = {
        headers: {
        Accept: 'application/json',
        },
    }
    
    data= await fetch('https://icanhazdadjoke.com',config)
    .then((res)=> res.json()).then(res=>res.joke)
    return data
}
