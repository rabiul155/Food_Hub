import { toast } from "react-toastify"


export const jwtToken=(email,navigation)=>{
    fetch(' https://food-crunch-server.vercel.app/jwt',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({email})
    })
    .then((res=>res.json()))
    .then(data=>{
        localStorage.setItem('FoodCrunch-Token',data.token)
        return navigation()
    })
    .catch(error=>toast.error(error.message,{autoClose:1000}))
}