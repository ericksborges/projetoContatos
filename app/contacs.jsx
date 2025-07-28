import { View, FlatList } from "react-native";
import ContactDetails from "./information";
import { contactList } from "../constants/data";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardContatos from '../components/CardContatos'

const Stack = createNativeStackNavigator();

function ContactListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={contactList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardContatos
            item={item}
            onPress={() => navigation.navigate("Detalhes", { item })}
          />
        )}
      />
    </View>
  );
}

export default function Contacts() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Pokemons" component={ContactListScreen} />
      <Stack.Screen name="Detalhes" component={ContactDetails} />
    </Stack.Navigator>
    )
}
