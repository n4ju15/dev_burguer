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

    list.innerHTML = myLi
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
    const finalPrice = menuOptions.reduce((acc, value) => {
        return acc + value.price
    }, 0)

    const totalValueElement = document.querySelector('li');
    totalValueElement.textContent = `R$ ${finalPrice.toFixed(2)}`;
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAll)