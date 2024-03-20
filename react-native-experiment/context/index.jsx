import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function getProducts() {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            if (data) {
                setLoading(false)
                setProducts(data.products);
            }
        }
        getProducts();
    }, [])

    return <Context.Provider value={{ products, loading }}>{children}</Context.Provider>;
};
export default ProductContext