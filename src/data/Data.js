import axios from "axios"
const data = (state)=>{
    axios.get("http://localhost:3000/boolean").then((res)=>{
        state = res.boolean
        console.log(state)
        return state
    }).catch((err)=>{
        console.log(err)
    })

}
export default data