import { ServiceBase } from "./service-base";
export class ProductsService extends ServiceBase {

  static getProducts = async () => {
    var productResp = await fetch(this.getUrl("/products"), {
      cache: "no-store",
    });
    
    if (!productResp.ok) {
      console.error("API Error:", productResp.status);
      return [];
    }
    const data = await productResp.json();

    return data.products;
  };
  static getProductById = async (id: number) => {
    var productResp = await fetch(this.getUrl("/products/" + id), {
      cache: "no-store",
    });
    if (!productResp.ok) {
      console.error("API Error:", productResp.status);
      return null;
    }
    var product = await productResp.json();
    return product;
  };
}
