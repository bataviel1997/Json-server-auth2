import axios from "axios"
// 1.menangkap documen by id app
const app = document.getElementById('app')
// 2.export function
export default function Home(){
    app.innerHTML += `<h1>Home</h1>`
    axios.get('http://localhost:3000/notes')
    .then(res =>{
        console.info(res.data)
        res.data.map((e)=>{
            app.innerHTML +=`
            <div>${e.note}</div>
            
            `
        })
    })
}