import {Drawer} from 'expo-router/drawer';
import {Ionicons} from '@expo/vector-icons';

export default function Layout() {
  return(
    <Drawer>
      <Drawer.Screen
      name='home' 
      options={{
        title:"Início",
        drawerIcon: ({color, size}) => (
            <Ionicons name='home' color={color} size={size} />
          ),
        }}
      />
      
      <Drawer.Screen
      name='Contacts'
      options={{ 
        title:"Contatos",
          drawerIcon: ({color, size}) => (
            <Ionicons name='people' color={color} size={size} />
          ),
      }} 
      />
      
      <Drawer.Screen
      name='Information' 
      options={{
        title:"Sobre",
          drawerIcon: ({color, size}) => (
            <Ionicons name='information-circle' color={color} size={size} />
          ),
      }}
      />
      
    </Drawer>
  )
}
