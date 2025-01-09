import { View, Text } from 'react-native'

interface Header {
    Left?: React.ReactNode;
    CenterText?: string;
    Center?: React.ReactNode;
    Right?: React.ReactNode;
}

const Header = ({ Left, CenterText, Center, Right}: Header) => {
  return (
    <View  style={{elevation: 5}} className='w-full h-[70px] bg-gray-300 items-end  pb-3 px-5 flex-row justify-between'>
       {Left ? Left : <View />} 
       {Center ? Center : CenterText? <Text className='text-2xl font-semibold'>{CenterText}</Text> :<View />} 
       {Right ? Right : <View />} 
    </View>
  )
}

export default Header