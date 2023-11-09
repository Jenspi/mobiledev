import React, { useState, useReducer } from "react";
import { StyleSheet, View, Text, Image, Button, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReusableMove from "../components/ReusableMove";
import ReusableSkill from "../components/ReusableSkill";
import ReusableStat from "../components/ReusableStat";

const STAT_SCREEN_STATE = "creation";
const COMBAT_SCREEN_STATE = "fighting";

var pointsRemaining = 15;
var pointsBuff = 5;//when you defeat the monster and try again
const STATS_INCREMENT = 1;
var pointsDone;//keeping track of damage dealt, health regened, etc. for combat log

const HW2GameScreen = (props) => {
    const reducer = (state, action) => {
        //state- an object that looks like this: {health:number, strength:number, magic:number}
        //action- looks like this: {statToChange: health, amount:number}

        if(pointsRemaining < 0){
            //return state if no points left to spend
            return state;
        }
        switch(action.statToChange){
            //PLAYER STATS/SKILLS---------------------------------------------------------------------------
            case "HEALTH":
                if( (state.health + action.amount) <0){
                    //covers (-num plus int)= -num   AND   (+num minus int)= -int
                    return state;
                }
                return{...state, health: (state.health + (action.amount*10)) };
            case "STRENGTH":
                if( (state.strength + action.amount) <0){
                    return state;
                }
                return{...state, strength: state.strength + action.amount};
            case "MAGIC":
                if( (state.magic + action.amount) <0){
                    return state;
                }
                return{...state, magic: state.magic + action.amount};

            //MONSTERS AND PLAYERS EFFECTS------------------------------------------------------------------
            case "A_MONSTER":
                //Attack Monster
                if((state.monsterHealth - action.amount) <= 0){
                    //do no user attacks; game is over!
                    console.log("Monster health is 0");
                    
                    return{...state, monsterHealth: (state.monsterHealth = 0) };
                }
                else{
                    console.log("attacked monster with normal attack");
                    pointsDone= state.monsterHealth - action.amount;
                    //combatText = combatPrompts[0][0];
                    return{...state, monsterHealth: pointsDone};
                }
            case "F_MONSTER":
                if((state.monsterHealth - action.amount) <= 0){
                    //do no user attacks; game is over!
                    console.log("Monster health is 0");
                    return{...state, monsterHealth: (state.monsterHealth = 0) };
                }
                else{
                    console.log("attacked monster with fire");
                    return{...state, monsterHealth: state.monsterHealth - action.amount};
                }

            case "P_HEAL":
                //Heal Player; magic loses a point and monster cannot use a move
                if((state.playerMagic - action.amount) < 0){
                    //not enough magic, do not use turn
                    console.log("Player has no magic");
                    return state;
                }
                else{
                    console.log("Player healed");
                    // dispatch( {statToChange: "P_HEAL", amount: state.playerMagic-action.amount });
                    return{...state, playerHealth: state.playerHealth + action.amount};
                }
                
            default:
                return state;
        }
    }
    //using useState hook totrack state
    const[gameState, setGameState] = useState(STAT_SCREEN_STATE);
    const [state, dispatch] = useReducer(reducer, {health:10,strength:1,magic:1, monsterHealth:100, monsterStrength:50, monsterMagic:100, playerHealth:100, playerMagic:50, playerStrength:10});
    var whatToDisplay;
    //Creating combat log text:
    var combatText;
    //prompts = [ [hits on monster], [hits on you], [heals]]
    var combatPrompts = [
        [`Hit! You dealt VAP ${props.pointsDone} damage.`, `${props.pointsDone} damage done to VAP!.`] ,
        [`VAP hit you for ${props.pointsDone} damage.`] ,
        [`You healed ${props.pointsDone} health.`] 
    ];

    switch(gameState){
        case STAT_SCREEN_STATE:
            whatToDisplay = <View style={styles.container}>
                                <Text style={{textAlign : 'center', color : 'darkslategrey', fontWeight : "bold", paddingBottom:100, fontSize:30}}>ASSIGN POINTS!</Text>
                                <ReusableSkill title= "HEALTH" point={state.health} 
                                onIncrease={ ()=>{ dispatch( {statToChange: "HEALTH", amount:STATS_INCREMENT}); pointsRemaining--; } }
                                onDecrease={ ()=>{ dispatch( {statToChange: "HEALTH", amount:-1*STATS_INCREMENT});  pointsRemaining++; } }/>

                                <ReusableSkill title= "STRENGTH" point={state.strength}
                                onIncrease={ ()=>{ dispatch( {statToChange: "STRENGTH", amount:STATS_INCREMENT}); pointsRemaining--; } }
                                onDecrease={ ()=>{ dispatch( {statToChange: "STRENGTH", amount:-1*STATS_INCREMENT});  pointsRemaining++; } }/>

                                <ReusableSkill title= "MAGIC" point={state.magic}
                                onIncrease={ ()=>{ dispatch( {statToChange: "MAGIC", amount:STATS_INCREMENT});  pointsRemaining--; } }
                                onDecrease={ ()=>{ dispatch( {statToChange: "MAGIC", amount:-1*STATS_INCREMENT});  pointsRemaining++; } }/>

                                {pointsRemaining >0 ? <Text style={ {textAlign : 'center', color : 'darkslategrey', fontWeight : "bold", paddingTop:100, fontSize:15} }>Spend all points before continuing! Points remaining: {pointsRemaining}</Text> : <TouchableOpacity onPress={()=>{ setGameState(COMBAT_SCREEN_STATE); }} ><Text style= {{textAlign : 'center', color : 'darkslategrey', fontWeight : "bold", paddingTop:100, fontSize:15}}>Click here to fight!</Text></TouchableOpacity>}
                                
                            </View>
                            
            break;//for STAT_SCREEN_STATE case

        case COMBAT_SCREEN_STATE:
            whatToDisplay = <View style={styles.container}>
                                {/* <Text style={styles.format}>COMBAT SCREEN</Text> */}
                                <View style={ {flexDirection:"row", alignSelf: 'center', paddingBottom:25} }>

                                    {/* STATS */}
                                    <ReusableStat title="MONSTER" C_health={state.monsterHealth} C_strength={state.monsterStrength} C_magic={state.monsterMagic}/>
                                    <ReusableStat title="PLAYER" C_health={state.playerHealth} C_strength={state.playerStrength} C_magic={state.playerMagic}/>
                                </View>

                                {/* MONSTER PHOTO AND COMBAT LOG */}
                                    <Image style={styles.listing} source={require('../../assets/images/game/python.png')}/>
                                    <Text style={styles.format2}>VAP! (Very adorable Python)</Text>

                                    <Text style={styles.combatLogBox}>{props.combatText}</Text>
                                    <Text sytle={{textAlign:"center"}}>Just gonna sit there? You have no choice..</Text>
                                    <Text sytle={{textAlign:"center"}}>He's cute, but invasive.</Text>

                                    {/* MOVES */}
                                    <View style={ {flexDirection:"row"} }>
                                        <ReusableMove title="ATTACK" imageSource={require('../../assets/images/game/fight.png')}  onUserPress={ ()=>{ dispatch( {statToChange: "A_MONSTER", amount: (Math.floor(Math.random() * state.playerStrength)) });  } }/>
                                        <ReusableMove title="FIRE" imageSource={require('../../assets/images/game/fire.png')} onUserPress={ ()=>{ dispatch( {statToChange: "F_MONSTER", amount: (Math.floor(Math.random() * state.playerStrength)) });  } }/>
                                        <ReusableMove title="HEAL" imageSource={require('../../assets/images/game/heal1.png')} onUserPress={ ()=>{ dispatch( {statToChange: "P_HEAL", amount: (Math.floor(Math.random() * state.playerMagic)) });  } }/>
                                    </View>
                                
                                    {/* Checking Monster's health */}
                                    {state.monsterHealth <=0 ? <TouchableOpacity onPress={()=>{ pointsRemaining=pointsBuff; setGameState(STAT_SCREEN_STATE);  }} ><Text style={styles.format2}>YOU HAVE DEFEATED HIM! Level up your skills and try again?</Text></TouchableOpacity> : <Text style={styles.format2} >DEFEAT HIM!</Text> }
                                    {/* Checking Player's health */}
                                    {state.playerHealth <=0 ? <Text style={ {textAlign : 'center', color : 'darkslategrey', fontWeight : "bold", paddingTop:100} }>YOU ARE DEAD</Text> : null }
                                </View>
            break;//for COMBAT_SCREEN_STATE case
    }
    
    return whatToDisplay;
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "wheat",
        padding:45,
        flex:1
    },
    listing: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    buttons: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
        justifyContent:"space-between"
    },
    format: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
    },
    format2: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
        paddingTop:20
    },
    boxStats: {
        flexDirection:"column",
        alignSelf: 'center',
        margin:10,
        //alignItems: "space-evenly",
        

        borderWidth:5,
        borderRadius: 13,
    },
    boxText: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
        padding: 3,
    },
    danger:{
        backgroundColor:'red',
        fontWeight:'bold',
        color: 'white'
    },
    combatLogBox:{
        //flexDirection:"column",
        //alignSelf: 'center',
        margin:10,
        padding:10,
        //alignItems: "space-evenly",
        

        borderWidth:5,
        borderRadius: 13,
        backgroundColor:"tan"
    },
});

export default HW2GameScreen