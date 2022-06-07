class Products {
  //робимо рендеринг щоб взяти наші дані з продуктами
  render() {
    let htmlCatalog = ''
    CATALOG.forEach(({ id, name, price, image }) => {
      htmlCatalog += `
      <li>
        <span>${name}</span>
        <img src="${image}"/>
        <span>${price}</span>
        <button>Додати до кошика</button>
      </li>
      `
    })

    const html = `
    <ul>
      ${htmlCatalog}
    </ul>
    `
    ROOT_PRODUCTS.innerHTML = html
  }
}

const productsPage = new Products()
productsPage.render()
