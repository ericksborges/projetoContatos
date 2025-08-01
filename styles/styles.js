import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fffbe6',
        padding: 16,
    },
    image:{
        width: "100%",
        height: 200,
    },
    title:{
        fontSize: 25,
        marginVertical: 12,
        color: 'red',
        textShadowColor: '#f67280',
        textShadowOffset: {width: 2, ight:3},
        textShadowRadius: 3,
        textAlign: 'center'
    },
    description:{
        fontSize: 16,
        color: "#444",
        marginTop: 8,
        textAlign: 'center',
    },
    subContainter:{
        backgroundColor: 'white',
        borderRadius: 20,
        height: '100%',
        shadowColor:"#000",
        shadowOffset: {width: 4, height: 4},
        shadowOpaticy: 0.3,
        shadowRadius: 4.65,
        elevation: 10
    },
    buttonView:{
        alignItems: 'center',
        marginTop: 25,
    },    
    button: {
        backgroundColor: "#f67280",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5,
    },
    textButton: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 16,
        
    },
    avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffe4b5",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
})