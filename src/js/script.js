const nav__all = document.querySelector(".nav__all")

const barras__menu__mobile = document.querySelector(".barras__menu__mobile")

barras__menu__mobile.addEventListener("click", () => {
    nav__all.classList.add("nav__mobile__active")
})

const exit__menu__mobile = document.querySelector(".exit__menu__mobile");

exit__menu__mobile.addEventListener("click", () =>{
    if(nav__all.classList.contains("nav__mobile__active")){
        nav__all.classList.remove("nav__mobile__active")
    }
})

/*OBESERVADOR*/

const lista_de_oberservados = document.querySelectorAll(".obeservado")

const obeservador = new IntersectionObserver( (entrada) =>{
    entrada.forEach( (entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add("olhando")
        }
    })
})

lista_de_oberservados.forEach( (oberservado_separado) =>{
    obeservador.observe(oberservado_separado)
})
