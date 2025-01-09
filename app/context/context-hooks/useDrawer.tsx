import { useContext } from 'react'
import { View, Text } from 'react-native'
import { DrawerContext } from '../drawer'



const useDrawer = () => {
 return  useContext(DrawerContext);
}

export default useDrawer