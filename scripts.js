const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''


function showAll() {
    myLi = '' // Reinicie a variável myLi para evitar acumulação de cards

    menuOptions.forEach(product => {
        myLi += `
            <li>
            <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

buttonShowAll.addEventListener('click', showAll)