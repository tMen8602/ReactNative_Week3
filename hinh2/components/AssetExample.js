import { Text, View,TextInput, Image ,TouchableOpacity} from 'react-native';

export default function AssetExample() {
  return (
    <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:"#C7F4F6",justifyContent:'center',alignItems:'center'}}>
      <Image style={{height:128, width:128}} source={require('../assets/snack-icon.png')} />
    </View>
    <View style={{flex:0.3,backgroundColor:"#D1F4F6"}}>
      <Text style={{textAlign:'center',fontSize:25,fontFamily:'bold'}}>GROW YOUR BUSINESS</Text>
    </View>
    <View style={{flex:0.3,backgroundColor:"#E5F4F5"}}>
      <Text  style={{textAlign:'center',fontSize:20}}>
        We will help you to grow your business using
online server
      </Text>
    </View>
    
    <View style={{flex:0.5,backgroundColor:"#00CCF9",alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
     <TouchableOpacity style={{backgroundColor:'#E3C000',height:50,justifyContent:'center',width:120}}>
      <Text  style={{textAlign:'center',fontSize:25,fontFamily:'bold'}}>
        LOGIN
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor:'#E3C000',height:50,justifyContent:'center',}}>
      <Text  style={{textAlign:'center',fontSize:25,fontFamily:'bold',width:120}}>
        SIGN UP
      </Text>
     </TouchableOpacity>
    </View>
    <View style={{flex:0.3,backgroundColor:"#00CCF9"}}>
      <Text  style={{textAlign:'center',fontSize:25,fontFamily:'bold'}}>
        HOW WE WORK?
      </Text>
    </View>
    </View>
  );
}


