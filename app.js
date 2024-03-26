import mongoose from "mongoose"
const url_db = 'mongodb://localhost:27017/utma3'

mongoose.connect(url_db)
.then(() => {
    console.log('conexión exitosa')
})
.catch((err) => {
    console.log('Fallo la conexión a la base de datos')
})

const alumnos_esquema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        numerotel:{
            type:Number
        }

    }
)
 
const alumnos = new mongoose.model('tabla de registro de alumnos', alumnos_esquema)

alumnos.create(
    {
        name:'jesus',
        apepat:'Salazar',
        numerotel:424254252,
    }
)