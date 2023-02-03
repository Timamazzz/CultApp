import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Header from '../../../components/Project/Header/Header';
import {SCREENS} from '../../../navigation/screensName';
import {getDataFromApi} from '../../../api/getData/getData';
import Footer from '../../../components/Project/Footer/Footer';

// @ts-ignore
const IndexScreen = ({navigation, route}) => {
  const [data, setData] = useState();
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    getDataFromApi().then(value => setData(value));
  }, []);
  return (
    <View style={styles.container}>
      <Modal visible={showImage}>
        <TouchableOpacity
          onPress={() => {
            setShowImage(false);
          }}>
          <Text style={styles.closeImage}>X</Text>
        </TouchableOpacity>
        {
          // @ts-ignore
          <Image source={{uri: data?.hdurl}} style={styles.imageHD} />
        }
      </Modal>
      <Header
        email={route.params.email}
        exit={() => {
          navigation.navigate(SCREENS.Start);
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Astronomy picture of the Day</Text>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {
            setShowImage(true);
          }}>
          <Image
            source={{uri: 'https://go-apod.herokuapp.com/image'}}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={styles.post}>
          {
            // @ts-ignore
            <Text style={styles.titleText}>{data?.title}</Text>
          }
          <View style={styles.inRow}>
            <Text style={[styles.greyText, styles.margin]}>
              {
                // @ts-ignore
                data?.date
              }
            </Text>
            {
              // @ts-ignore
              <Text style={styles.greyText}>{data?.copyright}</Text>
            }
          </View>
          <ScrollView>
            {
              // @ts-ignore
              <Text>{data?.explanation}</Text>
            }
          </ScrollView>
        </View>
      </View>
      <Footer />
    </View>
  );
};
export default IndexScreen;
