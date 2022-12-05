import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../four04/Four04";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  // console.log(useParams());
  const { productID } = useParams();

  useEffect(() => {
    fetch("http://localhost:1221/iphones")
      .then((res) => res.json())
      .then((data) => {
        // const productList = product;

        const singleProduct = data.filter(
          (x) => x.product_url === productID
        );

        setProducts(singleProduct);
      })
      .catch(() => console.log("unable to fetch!!"));

    // return () => {
    //   alert("component removed from DOM");
    // };
  }, []);
  console.log(products);

  if (products.length!==0) {
    return (
      <section className="internal-page-wrapper">
        <div className="container">
          
          {products?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let details = product.product_description;

            return (
              <div key={id}>
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wraper font-weight-bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-12 col-md-6 my-auto">
                    <div className="starting-price">
                      {`starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                    <div className="product-image">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </section>
    );
  } else {
    return <Four04 />;
  }
}

export default ProductsPage;
