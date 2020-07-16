export const state = () => ({
  users: [
    {
      id: '001',
      username: 'farmer1',
      password: 'pass1234',
      email: 'a@b.c',
      phone: '0123456789'
    }, {
      id: '002',
      username: 'farmer2',
      password: 'pass1234',
      email: 'd@e.f',
      phone: '0123456789'
    }
  ],
  products: [],
  productImages: {
    yam: 'https://www.brookstropicals.com/wp-content/uploads/2019/06/yams-1240x1120.jpg',
    beans: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGTUSG0pDphvU1-Qt-7mL1PvFMxf9CLepPpg&usqp=CAU',
    cassava: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2013/02/Cassava.jpg?fit=304%2C229&ssl=1',
    maize: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/sites/2/2018/01/maize-farming.jpg?ssl=1',
    millet: 'https://img3.exportersindia.com/product_images/bc-full/dir_147/4398159/yellow-millet-1495212857-3001456.jpeg'
  }
})

export const mutations = {
  addProduct (state, product) {
    state.products = [...state.products, product]
  }
}

export const getters = {
  users: (state) => {
    return state.users
  },
  productImages: (state) => {
    return state.productImages
  },
  products: (state) => {
    return state.products
  },
  userCount: (state) => {
    return state.users.length
  },
  productCount: (state) => {
    return state.products.length
  }
}
