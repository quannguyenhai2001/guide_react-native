import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const ProductListItem = ({ title, onPress, bgColor }) => {
    return (
        <View style={styles.productItemOuterContainer}>
            <Pressable style={{ ...styles.pressableView, backgroundColor: bgColor }}>
                <View style={styles.productItemInnerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default ProductListItem;

const styles = StyleSheet.create({
    productItemOuterContainer: {
        flex: 1,
        margin: 10,
        height: 200,
        borderRadius: 10,
    },
    productItemInnerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressableView: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: '#000',
    },

})