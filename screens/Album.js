import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import AppLoading from "expo-app-loading";
import PhotoContainer from "../components/PhotoContainer";

let Album = () => {
  let [albumPhotos, setAlbumPhotos] = React.useState([]);
  let [albumLoaded, setAlbumLoaded] = React.useState(false);
  let [alonePhoto, setAlonePhoto] = React.useState([]);

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
      for (let i = 0; i < responseJson.length; i++) {
        getPhoto(responseJson[i].id).then((data) => {
          arr.push({ name: responseJson[i].title, photos: data });
          if (i >= responseJson.length - 1) {
            let split = [];
            for (let v = 0; v < arr.length; v = v + 2) {
              if (arr[v + 1] === undefined) {
                setAlonePhoto([arr[v]]);
              } else {
                split.push([arr[v], arr[v + 1]]);
              }
            }
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
      <ScrollView>
        <View style={styles.pushDown}></View>
        {albumPhotos.map((album) => (
          <View key={Math.random()} style={styles.row}>
            <PhotoContainer
              photo={album[0].photos[0].url}
              text={album[0].name}
            />
            <View style={styles.spaceFiller}></View>
            <PhotoContainer
              photo={album[1].photos[0].url}
              text={album[1].name}
            />
          </View>
        ))}
        {alonePhoto.map((album) => (
          <View key={Math.random()} style={styles.row}>
            <PhotoContainer photo={album.photos[0].url} text={album.name} />
            <View style={styles.spaceFlex}></View>
            <View></View>
          </View>
        ))}
        <View style={styles.pushDown}></View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <AppLoading start={fetchAlbumData()} />
        <Text>Loading...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 8,
  },
  spaceFiller: {
    width: 6,
  },
  spaceFlex: {
    width: null,
    flex: 1,
  },
  pushDown: {
    height: 16,
  },
});

export default Album;
