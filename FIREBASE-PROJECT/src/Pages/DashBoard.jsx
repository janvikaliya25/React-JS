import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../../firebase"

export default function DashBoard(){
    const [uid,setuid]=useState("")
    const [data,setdata]=useState("")

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setuid(user.uid)
            }
        })
    },[])

    useEffect(()=>{
        if(uid){
            getdata()
        }
    },[uid])

    const getdata=async()=>{
        await getdata(doc(db,"users",uid))
        .then((user)=>{
            console.log(user.data)
            setdata(user.data().name)
        })
    }
    return(
        <div>
            <h1 className="text-center">Dashboard</h1>

            <h1>Welcome,{data}</h1>
        </div>
    )
}