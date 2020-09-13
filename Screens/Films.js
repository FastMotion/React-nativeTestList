import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SectionList, StyleSheet, Button, ActivityIndicator} from 'react-native';
import FilmCards from './FilmCards'


class Films extends React.Component {
  state = {
    data: [],
    fullList: false,
    listLength: 3,
    date: null
  }


  componentDidMount() {
    fetch(`http://api.tvmaze.com/schedule?country=US&date=${this.props.route.params.date.dateString}`)
      .then((data) => data.json())
      .then(data => this.setState({
        data,
        date: this.props.route.params.date.dateString
      }))
    }

  showMore = () => {
      this.setState({
        fullList: true
      })
  }

  render() {
    const { data, fullList, listLength, date } = this.state
    console.log('state', fullList)
    const list = fullList ? data : data.slice(0, listLength)
    // console.log('list', list)
    return (
      <View style={styles.container}>
        {data.length < 1 ? <ActivityIndicator animating={true} style={styles.loader} size='large'/> : null}
        <SectionList
          sections={[
            {title: date, data: list }
          ]}
          renderItem={({item}) => <FilmCards data={item} />}
          renderSectionHeader={({section}) =><Text style={styles.sectionHeader} numberOfLines={1}  >{section.title}</Text>}
          renderSectionFooter={({section}) =>!fullList ? <Button title="Show more" onPress={this.showMore}  /> : null}
          keyExtractor={(data) => data.id }
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  sectionHeader: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 25,
    paddingHorizontal:10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 200,
  },

})


export default Films
