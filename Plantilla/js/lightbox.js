const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburger')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagne(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('shawImagen')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagne = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('shawImagen')
    hamburguer1.style.opacity = '0'
}