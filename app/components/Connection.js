import {SafeAreaView, View, Pressable, Text, StyleSheet, Image} from 'react-native'
import { Themes } from "../../assets/Themes"



export default function Connection ({pressButton}){

    return (

        <Pressable onPress={() => pressButton()} style={styles.pressable}> 
            <View style={styles.viewContainer}>
                <Image style={styles.spotifyImage} source={require('../../assets/spotify-logo.png')}></Image>
                <Text style={styles.connectText}>Connect with Spotify</Text>
            </View>
        </Pressable>

    )
    

}

const styles = StyleSheet.create ({

    pressable: {
        backgroundColor: Themes.colors.spotify,
        width: '60%',
        height: '10%',
        justifyContent: 'center',
        borderRadius: 99999,
    }, 
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    }, 

    connectText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 10,
    }, 
    spotifyImage: {
        width: 30,
        height: 30,
        marginLeft: 10
        
    }

})