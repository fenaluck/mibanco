const Sequelize = require('sequelize')

// crear la conexion
const sql = new Sequelize(
  //nombre de la base de datos
  'banco',
  //nombre del servicio 
  'postgres',
  //clave del servicio postgres
  '', 
  //ahora el host y dialect
  {
  host: 'localhost',
  dialect: 'postgres'
})


//Definimos los modelos pa las tablas de nuestra base de datos
//creamos el modelo para transacciones
const Transacciones = sql.define('Transacciones', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    monto: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 'No especificado'
    },
    cuenta: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 'No especificado'
    }
})

//creamos el modelo para cuentas 
const Cuentas = sql.define('Cuentas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  saldo: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaulValue: 0
  }
})
  
//relacionar modelos
Cuentas.hasMany(Transacciones)
Transacciones.belongsTo(Cuentas)

//crear nueva cuenta
async function init(){
  //creamos las tablas y sus relaciones
  await sql.sync()
  //creamos la cuenta
  nueva_cuenta = await Cuentas.create({
    //colocamos el objeto
    saldo:20000
  })
}
init()
//Finalmente exportamos los modelos
module.exports= {Transacciones, Cuentas}