const render = () => {
  const productsStore = localStorageUtil.getProducts()
  headerPage.render(productsStore.length)
  productsPage.render()
}

let CATALOG = []
//але певно краще прописувати тут бо сайт може тупити
//server/catalog.json
fetch('http://myjson.dit.upm.es/api/bins/409x')
  .then((response) => response.json())
  .then((body) => {
    CATALOG = body
    render()
  })
  .catch((error) => {
    console.log(error)
  })
