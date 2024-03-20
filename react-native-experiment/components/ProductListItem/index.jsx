import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
function createContrastColor(randomColor) {
    const randomColorHex = `#${randomColor}`;

    // Chuyển đổi màu từ hex sang RGB
    const red = parseInt(randomColor.substring(0, 2), 16);
    const green = parseInt(randomColor.substring(2, 4), 16);
    const blue = parseInt(randomColor.substring(4, 6), 16);

    // Tính toán màu đối lập (tương phản)
    const contrastRed = 255 - red;
    const contrastGreen = 255 - green;
    const contrastBlue = 255 - blue;

    // Chuyển đổi màu đối lập từ RGB sang hex
    const contrastColorHex = `#${(contrastRed * 65536 + contrastGreen * 256 + contrastBlue).toString(16).padStart(6, '0')}`;

    return contrastColorHex;
}
const ProductListItem = ({ title, onPress, bgColor }) => {
    return (
        <View style={styles.productItemOuterContainer}>
            <Pressable
                android_ripple={{ color: "#1e0707" }}
                onPress={onPress}
                style={{ ...styles.pressableView, backgroundColor: bgColor }}
            >
                <View style={styles.productItemInnerContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ ...styles.title, color: createContrastColor(bgColor) }}>
                        {title}
                    </Text>
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
        justifyContent: "space-between",
        alignItems: "center",
    },
    pressableView: {
        flex: 1,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,

    },
});
