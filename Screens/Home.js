import 'react-native-gesture-handler';
import  React from 'react';
import { View, Button ,StyleSheet, Image, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import TV from '../assets/TV.png'
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['us'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  today: 'today'
};
LocaleConfig.defaultLocale = 'us';

function Home({ navigation }) {
  return (
    <View  style={styles.header}>
      <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
       <Image source={TV} style={styles.image}/>
        <Text style={styles.header__text}>Для получения списка сериалов,</Text>
        <Text style={styles.header__text}> пожалуйста, выберите необходимый</Text>
        <Text style={styles.header__text}>месяц и день.</Text>
      </View>
      {/*<Button*/}
        {/*title="Go to Films"*/}
        {/*onPress={() => navigation.navigate('Films')}*/}
      {/*/>*/}
      <Calendar
        current={'2020-09-01'}
        onDayPress={(date) => {
          console.log(date)
          navigation.navigate('Films',{ date })
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  image: {
    display: 'flex',
    width: 100,
    height: 80,
    marginVertical: 50,
  },
  header__text: {
    width: '100%',
    textAlign: 'center'
  }
});


export default Home