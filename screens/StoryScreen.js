import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { ScrollView } from "react-native-gesture-handler";

let customFonts = {'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')}
export default class Feed extends Component{
    constructor(props){
        super(props)
        this.state={
            fontsLoaded: false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({
            fontsLoaded: true
        })
    }

    componentDidMount(){
        this._loadFontsAsync()
    }

    render(){
        if(!this.props.route.params){
            this.props.navigation.navigate("Home")
        }
        else if(!this.state.fontsLoaded){
            return(<AppLoading/>)
        }
        else{
            return(
                <View style={styles.container}>   
                <SafeAreaView style={styles.droidSafeArea} />
                <View style ={styles.appTitle}>

                <View style ={styles.appIcon}>
                    <Image source={require('../assets/logo.png')}
                    style ={styles.IconImage}/>
                </View>

                <View style = {styles.appTitleTextContainer}>
                    <Text style = {styles.appTitleText}> Story Telling App</Text>
                </View>
                </View>

                <View style={styles.storyContainer}>

                    <ScrollView style={styles.storyCard}>
                    <Image
                        source={require('../assets/story_image_1.png')}
                        style = {style.image}
                    />
                    <View>
                        <View>
                            <Text>
                                {this.props.route.params.story.title}
                            </Text>
                            <Text>
                                {this.props.route.params.story.author}
                            </Text>
                            <Text>
                                {this.props.route.params.story.created_on}
                            </Text>
                        </View>
                        <View>
                            <Iconicons name= {this.state.speakerIcon} 
                             size= {RFValue(30)}
                             color={this.state.speakerColor}
                             style= {{margin:RFValue(15)}}
                            
                            />
                        </View>
                    </View>
                    <View>
                        <Text>
                            {this.props.route.params.story.story}
                        </Text>
                        <Text>
                            Moral - {this.props.route.params.story.moral}
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Iconicons name = {heart}
                            size ={RFValue(30)}
                            color={"White"}/>
                            
                            <Text>
                                12k
                            </Text>

                        </View>

                    </View>
                    </ScrollView>
                </View>


                
                <Text> Loading... </Text> 
                </View>
            )
        }
    }   
}
