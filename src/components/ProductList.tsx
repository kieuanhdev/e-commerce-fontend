import type { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const products: ProductsType = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
    },
    {
        id: 2,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/2g.png",
            purple: "/products/2p.png",
            green: "/products/2gr.png",
        },
    },
    {
        id: 3,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/3b.png",
            purple: "/products/3bl.png",
            green: "/products/3gr.png",
        },
    },
    {
        id: 4,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/4w.png",
            purple: "/products/4p.png",
            green: "/products/4gr.png",
        },
    },
    {
        id: 5,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/5bl.png",
            purple: "/products/50.png",
            green: "/products/5r.png",
        },
    },
    {
        id: 6,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/6g.png",
            purple: "/products/6w.png",
            green: "/products/6gr.png",
        },
    },
    {
        id: 7,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/7g.png",
            purple: "/products/7p.png",
            green: "/products/7gr.png",
        },
    },
    {
        id: 8,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/8b.png",
            purple: "/products/8w.png",
            green: "/products/8gr.png",
        },
    },
];

const ProductList = () => {
    return (
        <div className="w-full">
            <Categories />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
