const { Transacciones, Cuentas } = require('./models.js')

async function nueva_transaccion(cuenta_id, monto) {
  // hago algo
}
//creamos la variable para guardar los datos de entrada
const accion = process.argv[2]
// condiciones
if (accion == 'nueva_t') {

  const cuenta_id = parseInt(process.argv[3])
  const monto = parseInt(process.argv[4]) 

  nueva_transaccion(cuenta_id, monto)

} else if (accion == 'listar_t') {
  // ejecuto la funcion de consulta
} else if (accion == 'consultar') {
  const cuenta_id = parseInt(process.argv[3])
  // .
}


// consultar
async function crear(descripcion, monto, cuenta) {
  
    const nuevo_pais = await Country.create({
      name: name,
      continent: continent
    })
  }
  
  async function listar () {
    const paises = await Country.findAll()
    console.log(paises)
  }
  
  async function buscarPais (id) {
    const pais = await Country.findByPk(id)
    console.log(pais);
  }
  
  async function buscarCiudad (id) {
    const ciudad = await City.findByPk(id)
    console.log(ciudad);
  }
  async function consulta(){
    const transacciones = await Transaction.findAll({
        limit: 5,
    });
    console.log(transacciones)
  }
  async function editar (id, nuevo_nombre) {
    const pais = await Country.findByPk(id)
    pais.name = nuevo_nombre
    await pais.save()
    console.log(pais);
  }
  
  async function borrar (id) {
    const pais = await Country.findByPk(id)
    await pais.destroy()
    console.log('Pais borrado');
  }
  
  async function add_ciudad_brasil () {
    // Primera forma de agregar una ciudad a un pais
    /*
    const ciudad = await City.create({
      name: 'Rio de Janeiro',
      CountryId: 2
    })
    */
    // segunda forma de agregar una ciudad a un pais
    const brasil = await Country.findByPk(2)
    brasil.createCity({
      name: "Gramado"
    })
  }
  
  async function ciudades_brasil() {
    const brasil = await Country.findByPk(2)
    cities = await brasil.getCities()
    console.log(cities);
  }
  async function add_multilingual(){
      const chile = await Country.create({
          name : 'Chile',
          continent: 'tri'
      })
      await chile.addLanguage({
          name:'Espanol'
      })
      await chile.addLanguage({
          name:'Arabe'
      })
  }
  
 
  