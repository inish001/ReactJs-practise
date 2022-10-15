import { useEffect } from "react"

const Fetch =()=>{
    useEffect(()=>{
        fetch(" http://localhost:8000/posts")
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
        })
    },[])
}
export default Fetch