import app from "./app";
import './database'

app.listen(app.get('port'),()=>{
    console.log("Escuchando el server")
})