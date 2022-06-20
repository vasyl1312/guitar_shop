class Products {
  constructor() {
    this.classNameActive = 'products-element__btn_active'
    this.labelAdd = 'Додати до кошика'
    this.labelRemove = 'Видалити з кошика'
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id)

    if (pushProduct) {
      element.classList.add(this.classNameActive)
      element.innerHTML = this.labelRemove
    } else {
      element.classList.remove(this.classNameActive)
      element.innerHTML = this.labelAdd
    }
  }

  //робимо рендеринг щоб взяти наші дані з продуктами
  render() {
    const productStore = localStorageUtil.getProducts()
    let htmlCatalog = ''

    CATALOG.forEach(({ id, name, price, image }) => {
      let activeClass = ''
      let activeText = ''
      //перевірка чи тицьнули на ''додати в кошик''
      if (productStore.indexOf(id) === -1) {
        activeText = this.labelAdd
      } else {
        activeClass = ' ' + this.classNameActive
        activeText = this.labelRemove
      }

      htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${image}" />
                <span class="products-element__price">
                    ⚡️ ${price.toLocaleString()} ₴
                </span>
                <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                ${activeText}
            </button>
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
