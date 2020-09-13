import React, {useState} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight, Modal} from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import icon from '../assets/defaultProfile.png'

export default function FilmCards({data}) {
  const shadowOpt = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 200,
    color: "#000",
    border: 10,
    radius: 7,
    opacity: 0.1,
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.cardWrapper}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: "#2196F3"}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Image style={styles.imgModal} source={data.show.image && data.show.image.original ? {
                uri: data.show.image.original,
              } : icon}/>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={() => {
        setModalVisible(true)
      }}>
        <BoxShadow setting={shadowOpt}>
          <Image style={styles.img} source={data.show.image && data.show.image.medium ? {
            uri: data.show.image.medium,
          } : icon}/>
        </BoxShadow>
      </TouchableHighlight>
      <View style={styles.cardWrapperText}>
        <View style={styles.content}>
          <Text style={styles.cardText} numberOfLines={1}>{data.name}</Text>
          <Text style={styles.cardPremiered}>{data.show.premiered.slice(-10, -6)}</Text>
        </View>
        <View style={styles.cardInner}>
          <Text style={styles.cardSeason}>Сезон: {data.season}</Text>
          <Text style={styles.cardNumber}>Эпизод: {data.number}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 30,
  },
  cardWrapperText: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  cardText: {
    fontSize: 18,
    color: '#333333',
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  img: {
    width: 140,
    height: 200,
    borderRadius: 7,
  },
  cardPremiered: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#b4b4b4',
  },
  cardInner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  cardSeason: {
    marginRight: 5,
    fontSize: 14,
    color: '#b4b4b4',
  },
  cardNumber: {
    fontSize: 14,
    color: '#b4b4b4',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  imgModal: {
    width: 300,
    height: 500,
  }

});