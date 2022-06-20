class Products {
  //робимо рендеринг щоб взяти наші дані з продуктами
  render() {
    let htmlCatalog = ''

    CATALOG.forEach(({ id, name, price, image }) => {
      htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${image}" />
                <span class="products-element__price">
                    ⚡️ ${price.toLocaleString()} ₴
                </span>
                <button class="products-element__btn">Додати до кошика</button>
            </li>
        `
    })

    const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
    `

    ROOT_PRODUCTS.innerHTML = html
  }
}

const productsPage = new Products()
productsPage.render()
