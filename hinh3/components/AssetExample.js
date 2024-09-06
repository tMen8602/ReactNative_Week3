import { Text, View,TextInput, Image ,TouchableOpacity} from 'react-native';

export default function AssetExample() {
  return (
    <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:"#C7F4F6",justifyContent:'center',alignItems:'center'}}>
      <Image style={{height:128, width:128}} source={require('../assets/snack-icon.png')} />
    </View>
    <View style={{flex:0.5,backgroundColor:"#D1F4F6"}}>
      <Text style={{textAlign:'center',fontSize:25,fontFamily:'bold'}}>FORGET PASSWORD</Text>
    </View>
    <View style={{flex:0.5,backgroundColor:"#E5F4F5"}}>
      <Text  style={{textAlign:'center',fontSize:20}}>
        Provide your account’s email for which you want to reset your password
      </Text>
    </View>
    <View style={{flex:0.5,backgroundColor:"#E5F4F5",alignItems:'center',justifyContent:'center'}}>
      <View style={{backgroundColor:'#C4C4C4',flexDirection:'row',alignSelf:''}}>
        <Image style={{height:40,width:45}} source={{uri:'https://www.shutterstock.com/image-vector/message-icon-email-news-illustrations-260nw-1933189457.jpg'}}/>
        <Text style={{fontFamily:'bold',fontSize:17,textAlign:'center',paddingTop:'7px',borderWidth: 0}}>Email</Text>
        <TextInput  style={{height:40,width:"90%",justifyContent:'center',fontSize:20}}/>
        
      </View>
    </View>
    <View style={{flex:0.3,backgroundColor:"#00CCF9",alignItems:'center',justifyContent:'center'}}>
     <TouchableOpacity style={{backgroundColor:'#E3C000',width:'94%',height:50,justifyContent:'center',}}>
      <Text  style={{textAlign:'center',fontSize:25,fontFamily:'bold'}}>
        NEXT
      </Text>
     </TouchableOpacity>
     
    </View>
    </View>
  );
}


