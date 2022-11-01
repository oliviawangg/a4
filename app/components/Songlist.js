import { StyleSheet, SafeAreaView, FlatList, View, Image, Text } from "react-native";
import Song from "./Song";
import { Images } from "../../assets/Themes";



export default function SongList ({tracks}) {

    const renderSongItem = ({item, index}) => {
        return <Song 
        index={index}
        imageUrl={item.album.images[1].url}
        songName={item.name}
        artistName={item.artists[0].name}
        albumName={item.album.name}
        duration={item.duration_ms}
        />
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>

                <Image source={Images.spotify} style={styles.img}></Image>
                <Text style={styles.topTrackText}> My Top Tracks</Text>
            </View>

            <FlatList
                data={tracks}
                renderItem={(item) => renderSongItem(item)}
                keyExtractor={(item, index) => index}>

            </FlatList>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '8%',
      width: '100%',
      flexDirection: 'row',
      padding: 5,
    },
    img: {
      resizeMode: 'contain',
      width: '10%',
      aspectRatio: 1,
    },
    topTrackText: {
      color: 'white',
      width: '85%',
      fontSize: 25,
      fontWeight: 'bold'
    },
    
  });
  
  