
let pantallaVacía = document.getElementById('pantallaVacía')
let pantallaFormulario = document.getElementById('pantallaFormulario')
let prodForm = document.getElementById ('prodForm')
let pantallaListado = document.getElementById ('pantallaListado')
let pantallaDetalle = document.getElementById ('pantallaDetalle')
let fab = document.getElementById ('fab')
let fabDos = document.getElementById ('fabDos')
let txt = document.getElementById ('txt')
let agregar = document.getElementById ('agregar')
let botonVolver = document.getElementById ('botonVolver')


    //click en el fab button
    
    fab.addEventListener ('click', function (event) {

        pantallaVacía.style.display = 'none'
        pantallaFormulario.style.display = 'block'
        pantallaListado.style.display = 'none'
        pantallaDetalle.style.display = 'none'


    });

  /*   //Click en el fab button 2 

  fabDos.addEventListener ('submit',  (event) => {
    pantallaVacía.style.display = 'none'
    pantallaFormulario.style.display = 'block'
    pantallaListado.style.display = 'none'
    pantallaDetalle.style.display = 'none'
  
  });*/
  


  


  
// funcion que muestra el detalle del producto
function verDetalle(titulo, tipo, desc) {
    let newProd = `<li class="detalle-prod">
        <h2>${tipo}</h2> <span>${titulo}</span>
        <p>${desc}</p>
        <button  type="submit" class="btn btn-secondary" id="botonVolver" data-volver="${botonVolver}">Volver</button>
      </li>`
  
    pantallaDetalle.innerHTML = newProd;

        pantallaVacía.style.display = 'none'
        pantallaFormulario.style.display = 'none'
        pantallaListado.style.display = 'none'
        pantallaDetalle.style.display = 'block'

   // boton volver al listado
pantallaDetalle.addEventListener('click', function (event) {
  if (event.target.getAttribute('data-volver')) {
    pantallaVacía.style.display = 'none'
        pantallaFormulario.style.display = 'none'
        pantallaListado.style.display = 'block'
        pantallaDetalle.style.display = 'none'
  }
})

  
      }

  

      pantallaListado.addEventListener('click', function (event) {
        if (event.target.getAttribute('data-desc')) {
      
          let titulo = event.target.getAttribute('data-titulo')
          let tipo = event.target.getAttribute('data-tipo')
          let desc = event.target.getAttribute('data-desc')
      
          verDetalle(titulo, tipo, desc);
      
        }
      })


agregar.addEventListener('click', function (event){

        pantallaVacía.style.display = 'none'
        pantallaFormulario.style.display = 'none'
        pantallaListado.style.display = 'block'
        pantallaDetalle.style.display = 'none'
}

)



// evento submit cuando el envia el formulario. Creamos un nuevo item dentro del listado.

prodForm.addEventListener('submit', function (event){
    event.preventDefault()
    let titulo = document.getElementById('titulo').value
    let tipo = document.getElementById('tipo').value
    let desc = document.getElementById('desc').value

    if (titulo && tipo && desc){
        let prod = `<li>
        
        <span>${tipo}</span>
        
        <button data-titulo="${titulo}" data-tipo="${tipo}" data-desc="${desc}" class="btn btn-secondary">➤</button>
        
        </li>`

        pantallaListado.innerHTML += prod
        prodForm.reset()
        
    } else{
      alert('hey, completá los campos!')
      pantallaVacía.style.display = 'none'
      pantallaFormulario.style.display = 'block'
      pantallaListado.style.display = 'none'
      pantallaDetalle.style.display = 'none'
    }


})
