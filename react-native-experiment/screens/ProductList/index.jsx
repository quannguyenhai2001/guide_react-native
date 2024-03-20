import React, { useContext } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Context } from "../../context";
import ProductListItem from "../../components/ProductListItem";
function createRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

const ProductList = () => {
    const { loading, products } = useContext(Context);
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return (<ProductListItem
                        title={item.title}
                        bgColor={createRandomColor()}
                    />)
                }}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

export default ProductList;
