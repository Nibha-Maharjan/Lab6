import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Deals(props) {
  const [deals, setdeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      await fetch('https://bakesaleforgood.com/api/deals') // promis
        .then((response) => response.json()) // string -> json object
        .then((data) => setdeals(data)) // array of deals
        .catch((error) => console.log(error));
    };
    fetchDeals();
  }, []);
  renderItem = (data) => {
    console.log(data.item.key);
    return (
      <View style={styles.cards}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('DealsDetails', { dealId: data.item.key })
          }
        >
          {/* <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('DealsDetails', {
              dealdtail: data.item.id,
            })
          }
        > */}
          <Image source={{ uri: data.item.media[0] }} style={styles.image} />
          <Text style={styles.Desc}>{data.item.title}</Text>
          <Text style={styles.text}>{data.item.price}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={deals} renderItem={(item) => this.renderItem(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
  },
  cards: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Desc: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});
