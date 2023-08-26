import React from "react";
import { Text, StyleSheet, View, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Images from "assets/images";

//Array of objects
const pokemon = [
  //properties of objects are key:value pairs; here each object has one property
  { name: "Mareep",
    pokedex : 179,
    //img : <Image source={require.('./favicon.png')}
    //img : './mareep.png',
    //img : <Image source={require('./mareep.png')}/>,
    img : <Image style={{ height: '10%',
                          width: '10%%',
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          borderRadius: 20}}
                  source={require('../../assets/images/pokemon/mareep.png')}/>,
    description : "\n   -> \n"
  },
  { name: "Flaaffy",
    pokedex : 180,
    //img : './flaaffy.png',
    img : <Image style={{ height: '10%',
                          width: '10%',
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          borderRadius: 20}}
                  source={require('../../assets/images/pokemon/flaaffy.png')}/>,
    description : "\n   -> \n"
  },
  { name: "Ampharos",
    pokedex : 181,
    //img : './ampharos.png',
    img : <Image style={{ height: '10%',
                          width: '10%',
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          borderRadius: 20}}
                  source={require('../../assets/images/pokemon/ampharos.png')}/>,
    description : "\n   -> Ampharos is my favorite pokémon (well, that list keeps growing) which is why I chose it's evolution line to play with.\n"
  },
  // { name: "Mega Ampharos",
  //   img : './mega.png',
  //   description : "Look at this beauty!"
  // },
];

const ListScreen = () => {
  //FlatList needs two props: data={array} and renderItem={function that returns JSX}
  //This return statement is returning JSX.
  //return <FlatList data={pokemon} renderItem={(element) => {return <Text style={styles.textStyle}>{element.item.name}</Text>}}/>;
  
  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={pokemon} renderItem={({item}) => {return <Text style={styles.textStyle}> {item.img}{item.name} is #{item.pokedex} in the Pokédex. {item.description}</Text>}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor : "darkseagreen",
    flex : 1
  },
  textStyle: {
    //fontFamily : <pokemon> , <normal>
    fontSize : 40,
    color: "gold",
    //backgroundColor : "darkseagreen",
    marginHorizontal: 10,
    //marginVertical: 50,
  },
  picture: {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
    
  }
});

//TODO: //export default means
export default ListScreen;
