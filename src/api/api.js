const { render } = require("react-dom")

export const getProducts = () => {
  return new Promise((resolve,reject)=>{
      resolve(
          [
              {id: 1 ,producName :'Ergonomic steel Chair',price:12},
              {id: 2 ,producName:'Generic Plastic Hat', price:12},
              {id: 3 ,producName:'Tasty Rubber Towels', price:13}
          ]
      )
  })

}