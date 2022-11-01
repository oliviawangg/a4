import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Connection from "./app/components/Connection";
import SongList from "./app/components/Songlist";


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // Token: Boolean – authenticated or not
  // Tracks: track information
  // getSpotifyAuth – function that changes token to true if successfully authenticated and fulfill trakcs
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
  // init contentDisplayed

  let contentDisplayed = null;

  // if token is true, render FlatList
  // else, render authenticatin button
  if (token) {
    // render Flatlist
    contentDisplayed = <SongList tracks={tracks}/>
  } else {
    // render Authentication
    contentDisplayed = <Connection pressButton={getSpotifyAuth}></Connection>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  sampleText: {
    color: 'white',
  }
});
