import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"

let windowWidth = Dimensions.get("window").width

const ProductCard = (props) => {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating
    } = props.item

    return (
        <View style={[ styles.main ]}>
            <Pressable style={[ styles.flex ]}>
                <View style={[ styles.imageContainer ]}>
                    <Image
                        source={{
                            uri: image
                        }}
                        style={[ styles.image ]}
                    />
                </View>
                <View style={[ styles.infoContainer ]}>
                    <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                        {title}
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 500, marginBottom: 15, color: "#cccccc" }}>
                        {category}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }} numberOfLines={2}>
                        {description}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 600}} numberOfLines={2}>
                        &#8377; {price}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: windowWidth,
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1,
        backgroundColor: "#fff"
    },
    flex: {
        flexDirection: "row",
        alignItems: "flex-start",
        width: windowWidth - 30,
        paddingVertical: 15
    },
    imageContainer: {
        width: 100,
        height: 100,
        paddingRight: 15
    },
    image: {
        width: 100,
        height: 100
    },
    infoContainer: {
        width: windowWidth - 30 - 115
    }
})

export default ProductCard