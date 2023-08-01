import axios from "axios"

export const fetchChatofUser=async(id)=>{
    const res=await axios.get("http://localhost:8000/chatapp/api/v1/fetchchatofUser",{headers:{
        "token":localStorage.getItem("token")
    }})
    return res.data;
}
export const accessChat=async(id)=>{
    const res=await axios.post("http://localhost:8000/chatapp/api/v1/accessChat",{userId:id},{headers:{
        "token":localStorage.getItem("token")
    }})
    console.log(res.data,"accesschatof user")
    return res.data;
}
export const createGrp=async(payload)=>{
    const res=await axios.post("http://localhost:8000/chatapp/api/v1/createGroupchat",payload,{headers:{
        "token":localStorage.getItem("token")
    }})
    console.log(res.data,"Group chat created")
    return res.data;
}