import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-64 mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mt-2">{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
