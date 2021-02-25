import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";

let Album = () => {
  let [albumData, setAlbumData] = React.useState([]);
  let [albumPhotos, setAlbumPhotos] = React.useState([]);
  let [albumLoaded, setAlbumLoaded] = React.useState(false);
  let [alonePhono, setAlonePhoto] = React.useState([]);

  async function getPhoto(id) {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/" + id + "/photos"
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchAlbumData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/albums");
      let responseJson = await response.json();
      setAlbumLoaded(true);
      let arr = [];
      // responseJson.map((x) => {
      //   getPhoto(x.id).then((data) => {
      //     arr.push(data);
      //     console.log(arr);
      //     setAlbumPhotos(arr[0]);
      //   });
      // });
      for (let i = 0; i < responseJson.length; i++) {
        getPhoto(responseJson[i].id).then((data) => {
          arr.push({ name: responseJson[i].title, photos: data });
          if (i >= responseJson.length - 1) {
            let split = [];
            for (let v = 0; v < arr.length; v = v + 2) {
              if (arr[v + 1] === undefined) {
                setAlonePhoto(arr[v]);
              } else {
                split.push([arr[v], arr[v + 1]]);
              }
            }
            console.log(split);
            setAlbumPhotos(split);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (albumLoaded) {
    return (
      <View>
        {albumPhotos.map((album) => (
          <View key={album.id} style={styles.row}>
            <View style={styles.photoShowStyle}>
              <Text>{album[0].name}</Text>
              <Image
                style={styles.imgstyle}
                source={{
                  uri: album[0].photos[0].url,
                }}
              />
            </View>
            <View style={styles.spaceFiller}></View>
            <View style={styles.photoShowStyle}>
              <Text>{album[1].name}</Text>
              <Image
                style={styles.imgstyle}
                source={{
                  uri: album[1].photos[0].url,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    );
  } else {
    return <AppLoading start={fetchAlbumData()} />;
  }
};

const styles = StyleSheet.create({
  photoShowStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 6,
  },
  spaceFiller: {
    width: 6,
  },
  imgstyle: {
    width: null,
    height: 100,
    flex: 1,
  },
});

export default Album;
