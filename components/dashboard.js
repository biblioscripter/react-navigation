import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Dashboard({ route, navigation }) {
    const name = route.params.name
    const listItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    return (
      <View style={styles.container}>
        <View style={styles.sidebar}>
            { listItem.map((item, key) => (
                <View style={styles.item} key={key}>
                    <TouchableOpacity style={styles.button}>
                        {item < 10 ? (<Text style={styles.text}>Category 0{item}</Text>)
                        : (<Text style={styles.text}>Category {item}</Text>)
                        }    
                    </TouchableOpacity>
                </View>
            )) }
        </View>
        <View style={styles.main}>
            <View>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>🖐️ Welcome {name} !</Text>
            </View>
            <View style={styles.content}> 
                <TouchableOpacity onPress={() => { navigation.navigate("Sign In") }}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    sidebar: {
        flex: 1,
    },
    main: {
        flex: 2,
    },
    item: {
        backgroundColor: "#e5e5e5",
        width: 120,
        height: 51.7,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: "#000",
        borderRightColor: "#000",
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
