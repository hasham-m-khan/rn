import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View ,Image,SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <Image 
      style={styles.asani_logo}
      source={require("./assets/asani_logo.png")}/>
      
      <View style={styles.container_below}>
        
          <Text style={styles.text}>
            SAMPLE 
          </Text>
          <Image
          style={styles.wonder_woman_logo}
          source={require("./assets/icon.png")}/>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    flex: 1,
    flexWrap:"wrap",
    backgroundColor: '#fff',
    alignContent:"center",
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "red",
    marginTop:20,
  },
 
  container_below:{
    position:'absolute',
    bottom:40,
    // display:"flex",
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    // alignContent:"center",
    borderWidth: 2,
    borderColor: "red",
    
    overflow:"visible",
  },
 

  //LOGO AND OTHER STYLES
  text:{
    width:"100%",
    textAlign:"center",
    borderWidth: 2,
    borderColor: "yellow",
  },

  asani_logo:{
    resizeMode:'contain',
    width:200,
    height:100,
    borderWidth: 1,
    borderColor: "black",
    
  },
  wonder_woman_logo:{
    resizeMode:'cover',
    width:80,
    height:30,
    borderWidth: 1,
    borderColor: "black",
  },
});
