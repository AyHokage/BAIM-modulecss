import { Product } from "@/types"
import { useState } from "react"

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
  const [productType, setProductType] = useState('')
  const [product, setProduct ] = useState({});
  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  }

  const postProduct = async() => {
    const productToPost = { 
      id: 30,
      productType: productType,
      productName: name,
      productDesc: desc,
      productImg: img
    };
  
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productToPost)
    });
  
    const data = await response.json();
    console.log(data);
    await fetchProducts()
  }

  // const async function deleteProduct (){
  //   const response = await fetch('/api/products')
  // }
  

  return (
    <div>
        <h1>Create product</h1>
        <input onChange={(e) => setName(e.target.value)} value={name} placeholder='name' type='text' name='name' />
        <input onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='desc' type='text' name='desc' />
        <input onChange={(e) => setImg(e.target.value)} value={img} placeholder='img' type='text' name='img' />
        <input onChange={(e) => setProductType(e.target.value)} value={productType} placeholder='productType' type='text' name='productType' />
        <button onClick={fetchProducts}>Fetch products</button>
        <button onClick={postProduct}>Post products</button>
        <div className="products">
            {products.length > 0 ? products.map((p : Product) => <div key={p.id}>{p.name}</div>) : <></>}
        </div>
    </div>
  )
}

export default CreateProduct