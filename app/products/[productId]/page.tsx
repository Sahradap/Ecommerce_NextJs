import { ProductsService } from "@/app/services/product-service";
import React from "react";
import '../../components/special-buttons/SpecialButtons.css'
import DetailButton from "@/app/components/special-buttons/DetailButton";

export async function generateMetadata(props:any){
console.log(props);
const param = await props.params;
  const productId = param.productId;
  
  var productDetail;
  if (productId) {
    productDetail = await ProductsService.getProductById(productId);
    return{
      title:productDetail.title
    }
  }
  return{
    title:"product detail page"
  }
}

export default async function ProductDetails(props: any) {
  console.log(props);
  const param = await props.params;
  const productId = param.productId;
  var productDetail;
  if (productId) {
    productDetail = await ProductsService.getProductById(productId);
  }
  return (
    <div>
      <div className="card container mt-4" style={{height:'410px', width:'300px'}}>
        
      <div><img src={productDetail.images?.[0]} className="card-img" style={{ height: '180px', objectFit: 'contain' }}></img></div>
       <div className="card-body">
       <h5 className="card-title" style={{height:'70px'}}> {productDetail.title}</h5>
       
       <p className='card-text'style={{overflow:'hidden', height:'30px'}}>{productDetail.description}</p>     
       <p className="card-text fw-semibold">AED {productDetail.price}</p>
       {/* <button className='button me-3'>Add To Cart</button>
       <button className='button'>Back</button> */}
       <DetailButton product={productDetail}/>
       </div>
       </div>
    </div>
  );
}
