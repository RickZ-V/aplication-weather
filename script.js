let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '8c702676dbead21ae4ec477fcb71ec8a'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  if(ciudad){
    fetchDatosClima(ciudad)
  }
})

function fetchDatosClima(ciudad){
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
  .then(data => data.json())
  .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML=''

  const ciudadNombre = data.name 
  const pasiNombre = data.sys.country
  const temperatura = data.main.temp 
  const descripcion = data.weather[0].description
  const humedad = data.main.humidity
  const icono = data.weather[0].icon

  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = `${ciudadNombre}, ${pasiNombre}`

  const tempInfo = document.createElement('p')
  tempInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

  const humInfo = document.createElement('p')
  humInfo.textContent = `La humedad es: ${humedad}%`

  const iconoInfo = document.createElement('img')
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

  const despInfo = document.createElement('p')
  despInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(tempInfo)
  divDatosClima.appendChild(humInfo)
  divDatosClima.appendChild(iconoInfo)
  divDatosClima.appendChild(despInfo)
}


