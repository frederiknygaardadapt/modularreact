import { useParams } from "react-router-dom";
import { ProductCard } from "ui/components/ProductCard";
import { ProductGrid } from "ui/components/ProductGrid";
import { useGetProductsQuery } from "./products.query";
import { Product } from "./products.type";

export const Products = () => {
  const { data } = useGetProductsQuery();

  return (
    <ProductGrid>
      {data?.products.map(({id, brand, name, price, image, slug}: Product) => (
        <ProductCard key={id} brand={brand} name={name} price={price} image={image} slug={`/products/${slug}`} />
      ))}
    </ProductGrid>
  );
};
