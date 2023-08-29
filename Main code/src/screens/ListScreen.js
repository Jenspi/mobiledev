import React from "react";
import { Text, StyleSheet, View, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Array of objects
const pokemon = [
  //properties of objects are key:value pairs; here each object has one property
  { name: "Mareep",
    pokedex : 179,
    img : <Image style={{ height: 180,
                          width: 180,
                          resizeMode: 'contain',
                          flexDirection: 'row',
                          }}
                  source={require('../../assets/images/pokemon/mareep.png')}/>,
    shiny : <Image style={{ height: 165,
                    width: 165,
                    resizeMode: 'contain',
                    flexDirection: 'row',
                    }}
          source={require('../../assets/images/pokemon/shiny_mareep.png')}/>,
    description : "\n╰➤ Evolves into Flaaffy level 15+\n"
  },
  { name: "Flaaffy",
    pokedex : 180,
    img : <Image style={{ height: 180,
                          width: 180,
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          borderRadius: 20}}
                  source={require('../../assets/images/pokemon/flaaffy.png')}/>,
    shiny : <Image style={{ height: 175,
                    width: 175,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    borderRadius: 20}}
          source={require('../../assets/images/pokemon/shiny_flaaffy.png')}/>,
    description : "\n╰➤ Cutest shiny from this evolution line.\n"
  },
  { name: "Ampharos",
    pokedex : 181,
    img : <Image style={{ height: 180,
                          width: 180,
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          borderRadius: 20}}
                  source={require('../../assets/images/pokemon/ampharos.png')}/>,
    shiny : <Image style={{ height: 165,
                            width: 165,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            borderRadius: 20}}
                  source={require('../../assets/images/pokemon/shiny_ampharos.png')}/>,
    description : "\n╰➤ Ampharos is one of my favorite pokémon :)\n"
  },
  { name: "Mega Ampharos",
    img : <Image style={{ height: 180,
                          width: 180,
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          borderRadius: 20}}
                  source={require('../../assets/images/pokemon/mega.png')}/>,
    shiny : <Image style={{ height: 165,
                            width: 165,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            borderRadius: 20}}
                  source={require('../../assets/images/pokemon/shiny_mega.png')}/>,
    description : "\n╰➤ Beautiful :)\n"
  },
];

const ListScreen = () => {
  //FlatList needs two props: data={array} and renderItem={function that returns JSX}
  //This return statement is returning JSX.
  //return <FlatList data={pokemon} renderItem={(element) => {return <Text style={styles.textStyle}>{element.item.name}</Text>}}/>;
  
  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={pokemon} renderItem={({item}) => {return <Text style={styles.textStyle}>{item.img}{item.shiny}{item.name} is #{item.pokedex} in the Pokédex.{item.description}</Text>}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor : "mediumblue",
    flex : 1
  },
  textStyle: {
    fontSize : 40,
    color: "goldenrod",
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontFamily : 'Avenir'
  },
  photo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    flexDirection: 'row',
    
  },
  desc: {
    fontSize : 28,
    color: "goldenrod",
    fontWeight: 'bold',
    marginHorizontal: 10,
    //fontFamily: 'pokemon-hollow-font'
    fontFamily : 'Avenir'
  }
});

//TODO: //export default means
export default ListScreen;


//todo: 
// find out how to align photos next to each other based on window width
// find out how to style the images in the pokemon array (so no copy/paste)
//find out how to style a header and then a title in the renderItem JSX return
//find out how to add custom fonts