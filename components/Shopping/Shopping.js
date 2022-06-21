class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = ``
  }

  render() {
    const productStore = localStorageUtil.getProducts()
    let htmlCatalog = ''
    let sumCatalog = 0

    CATALOG.forEach(({ id, name, price }) => {
      if (productStore.indexOf(id) !== -1) {
        htmlCatalog += `
          <tr>
            <td class="shopping-element__name">🎸 ${name}</td>
            <td class="shopping-element__price">${price.toLocaleString()} ₴</td>
          </tr>
        `
        sumCatalog += price
      }
    })
    const html = `
      <div class="shopping-container">
        <div class="shopping_logout" onClick="shoppingPage.handleClear();"></div>
            <table>
              ${htmlCatalog}
              <tr>
                <td class="shopping-element__name">💳  Сума</td>
                <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₴</td>
              </tr>
            </table>
      </div>
    `
    ROOT_SHOPPING.innerHTML = html
  }
}

const shoppingPage = new Shopping()
