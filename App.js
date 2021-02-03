import React, {useState} from 'react'
import { StyleSheet, Text, View, Image,ScrollView,Pressable, Animated, TouchableOpacity } from 'react-native'

const App = () => {

    const value = useState(new Animated.Value(0))[0];


    const marginAnim=()=>{

        const transx = Math.round(Math.random()) ? Math.random()*150 : -150* Math.random();

        Animated.timing(value, {
          toValue: transx,
          duration: 1000,
          useNativeDriver: true,
        }).start();

    }
    
    return (
      <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Animated.View
              style={{
                  transform: [{translateX:value}],
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                backgroundColor: 'red',
            }}
            />
        <TouchableOpacity onPress={marginAnim}>
            <Text style={{fontSize:20,width:100,textAlign:"center",marginTop:200,padding:10, backgroundColor:"blue",color:"white",borderRadius:50}}>Click</Text>
        </TouchableOpacity>
        </View>
      </>
    );
}

export default App

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 100,
    color: 'blue',
    fontWeight: 'bold',
  },
});
