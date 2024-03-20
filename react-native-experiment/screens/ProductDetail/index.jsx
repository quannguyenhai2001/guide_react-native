import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
const ProductDetail = () => {
    const route = useRoute();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const { id } = route.params;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            if (data) {
                setLoading(false);
                setProduct(data);
            }
        };
        getProduct();
    }, [])
    console.log(product.title)
    return (
        <View>
            {loading ? <Text>Loading</Text> : <Text>{product.title}</Text>}
        </View>
    );
};

export default ProductDetail;