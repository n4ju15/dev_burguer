const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
let myLi = ''

// Function para mostrar todos os cards
function showAll(productsArray) {
    myLi = '' // Reinicia a variável myLi para evitar acumulação de cards

    productsArray.forEach(product => {
        myLi += `
            <li>
            <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })

    list.innerHTML = myLi // O list É a ul > li
}


// Function para mapear todos os itens e dar 10% de desconto em todos os itens
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,     // Spread Operator
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}


// Function para somar todos os itens
function sumAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
            <li>
                <p>O valor total dos itens é R$ ${totalValue}</p>
            </li>
        `

}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAll)