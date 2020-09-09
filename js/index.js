let fruits = [
  {
    id: 1,
    title: 'Apples',
    price: 10,
    img: 'data:image/jpeg;base64,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'
  },
  {
    id: 2,
    title: 'Peaches',
    price: 10,
    img: 'https://bloximages.chicago2.vip.townnews.com/parkerpioneer.net/content/tncms/assets/v3/editorial/5/61/56144ea4-dc0c-11ea-8ebd-7bc5e1f7d2c0/5f32f79190c48.image.jpg?resize=400%2C309'
  },
  {
    id: 3,
    title: 'Tomatoes',
    price: 10,
    img: 'https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420'
  }
]

function _cardTemplate({id, title = '', content = '', price = 0, img = '#'}) {
  return `
            <div class="col-4">
            <div class="card">
                    <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                        <a href="#" class="btn btn-primary" data-id="${id}" data-btn="price" data-title="${title}" data-price="${price}">Price</a>
                        <a href="#" class="btn btn-secondary" data-id="${id}" data-btn="delete">Delete</a>
                    </div>
            </div>
            </div>
 
  `
}

const modalPrice = $.modal({
  title: 'Price',
  closable: true,
  footerButtons: [
    {
      text: 'OK',
      type: 'primary',
      handler() {
        modalPrice.close()
      }
    },
  ]
})

const onClick = (e) => {
  e.preventDefault()
  const {target} = e
  const id = +target.dataset.id
  const btn = target.dataset.btn
  const goodItem = fruits.find(item => item.id === id)
  if (btn === 'price') {
    modalPrice.setContent(`
      <p>Price ${goodItem.title}: <strong>${goodItem.price} $</strong></p>
      `)
    modalPrice.open()
  } else if (btn === 'delete') {
    $.confirm({
      title: 'Are you sure?',
      content: `<p>${goodItem.title} will be deleted</p>`
    }).then(() => {
        fruits = fruits.filter(item => item.id != id)
        render()
      }
    ).catch(() => {

    })
  }
}

function render() {
  const $container = document.querySelector('#goods')
  $container.innerHTML = ''
  const goods = fruits.map(_cardTemplate).join('')
  $container.insertAdjacentHTML('afterbegin', goods)

  document.addEventListener('click', onClick)

}

render()
