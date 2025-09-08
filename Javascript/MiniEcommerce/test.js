const watches = [
  {
    id: 1,
    title: "Fastrack Vyb Maverick Quartz",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Fastrack",
  },
  {
    id: 2,
    title: "Fastrack Marvellous FX2 Unisex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Titan",
  },
  {
    id: 3,
    title: "boAt Storm Infinity Smartwatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Boat",
  },
  {
    id: 4,
    title: "Sonata Storm Infinity Smartwatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Sonata",
  },
  {
    id: 5,
    title: "Noise Noise Storm Infinity Smartwatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Noise",
  }
];

searchWord = 'orm'

function searchProducts(){
    renderProductsArray = watches.filter((p)=>p.title.toLowerCase().includes(searchWord))



    console.log("******after search ****")
    renderProducts(renderProductsArray)
    console.log(renderProductsArray)
    console.log('*********************')
}

function renderProducts(renProd){
    renProd.map((p)=>console.log(p.title))
}
renderProducts(watches)


searchProducts()