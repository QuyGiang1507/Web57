```
//1.
const products = await ProductModel.find({ category: "Quần áo" })

//2.
const products = await ProductModel.find({ $and: [
    { price: { $min: 50000 }},
    { price: { $max: 100000 }}
]})

//3.
const products = await ProductModel.find({ $or: [
    { title: { $regex: new RegExp('áo', i) } },
    { description: { $regex: new RegExp('áo', i) } }
]})

//4.
const products = await ProductModel.find({ stockQuantity: 0 })

//5.
const products = await ProductModel.find({ rating: { $gte: 4 } })

//6.
const products = await ProductModel.find({ viewCount: { $gte: 2000 } }).sort({ viewCount: -1 })

//7.
const products = await ProductModel.find({ tags: { $in: ["nam"] } })

//8.
const products = await ProductModel.find({}).sort({ price: 1 })

//9.
const products = await ProductModel.find({ $and: [
    { category: "Quần áo"},
    { price: { $gt: 100000 }}
]}).sort({ title: 1 })
```
