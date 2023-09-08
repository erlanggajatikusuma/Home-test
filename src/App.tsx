/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ImageStyle,
  SafeAreaView,
  StatusBar,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from '../theme/color';
import {Button} from './components';

const FLEX: ViewStyle = {
  flex: 1,
};

const BUTTON_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 10,
  paddingHorizontal: 8,
};

const BUTTON_TOP: ViewStyle = {
  ...FLEX,
  marginHorizontal: 6,
};

const BUTTON_DISLIKE: ViewStyle = {
  backgroundColor: color.red,
};

const ITEM: ViewStyle = {
  backgroundColor: color.white,
  borderRadius: 6,
  marginVertical: 10,
  elevation: 5,
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 1,
};

const IMAGE: ImageStyle = {
  width: '100%',
  height: 175,
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
};

const FOOTER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 12,
};

const LIKES: TextStyle = {
  padding: 6,
  borderWidth: 1,
  borderRadius: 6,
  borderColor: 'gray',
};

const FOOTER_BUTTON: ViewStyle = {
  width: '50%',
  flexDirection: 'row',
};

const FLAT_LIST: ViewStyle = {
  paddingHorizontal: 14,
  paddingBottom: 68,
};

type ListItem = {
  id: string;
  image: ImageSourcePropType;
  likes: number;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const initialData: ListItem[] = [
    {id: '1', image: require('./assets/images/nature-1.jpeg'), likes: 0},
    {id: '2', image: require('./assets/images/nature-2.jpeg'), likes: 0},
    {id: '3', image: require('./assets/images/nature-3.jpeg'), likes: 0},
  ];

  const [listData, setListData] = useState(initialData);

  const handleLikeAll = () => {
    const updatedListData = listData.map(item => ({
      ...item,
      likes: item.likes + 1,
    }));
    setListData(updatedListData);
  };

  const handleResetAll = () => {
    const updatedListData = listData.map(item => ({
      ...item,
      likes: 0,
    }));
    setListData(updatedListData);
  };

  const handleDislikeAll = () => {
    const updatedListData = listData.map(item => ({
      ...item,
      likes: item.likes - 1,
    }));
    setListData(updatedListData);
  };

  const handleLike = (id: string) => {
    setListData(prevState =>
      prevState.map(item =>
        item.id === id ? {...item, likes: item.likes + 1} : item,
      ),
    );
  };

  const handleDislike = (id: string) => {
    setListData(prevState =>
      prevState.map(item =>
        item.id === id ? {...item, likes: item.likes - 1} : item,
      ),
    );
  };

  const renderItem = ({item}: {item: ListItem}) => (
    <View style={ITEM}>
      <Image source={item.image} style={IMAGE} />
      <View style={FOOTER}>
        <Text style={[LIKES, {color: isDarkMode ? color.white : color.black}]}>
          {item.likes} Like
        </Text>
        <View style={FOOTER_BUTTON}>
          <Button
            text="Like"
            onPress={() => handleLike(item.id)}
            style={[FLEX, {marginRight: 8}]}
          />
          <Button
            text="Dislike"
            onPress={() => handleDislike(item.id)}
            style={[BUTTON_DISLIKE, FLEX]}
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
        }}>
        <View style={BUTTON_WRAPPER}>
          <Button text="Like All" onPress={handleLikeAll} style={BUTTON_TOP} />
          <Button
            text="Reset All"
            onPress={handleResetAll}
            style={[BUTTON_TOP, {backgroundColor: color.white}]}
            textStyle={{color: color.black}}
          />
          <Button
            text="Dislike All"
            onPress={handleDislikeAll}
            style={[BUTTON_DISLIKE, BUTTON_TOP]}
          />
        </View>
        <FlatList
          data={listData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          fadingEdgeLength={22}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={FLAT_LIST}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
