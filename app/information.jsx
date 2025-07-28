import {View, Text, Image} from 'react-native';
import styles from '../styles/styles'

export default function Information({route}){
    const item = route?.params?.item || {
        name: "Aplicativo de listar pokemons" ,
        photo: require("../assets/images/ultraball.png"),
        info: "Este app é uma demonstração de navegação com React Native e Drawer."

    }
    
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={item.photo}/>
            <Text style={styles.title}> {item.name} </Text>
            <Text styles={styles.description}> {item.info}</Text>
        </View>

    )
}