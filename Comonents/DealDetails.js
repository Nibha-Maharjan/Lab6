import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

export default function DealDetails({ route }) {
  const [deal, setDeal] = useState({});

  useEffect(() => {
    const fetchDealDetail = async () => {
      try {
        const response = await fetch(
          `https://bakesaleforgood.com/api/deals/${route.params.dealId}`
        );
        const data = await response.json();
        setDeal(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDealDetail();
  }, [route.params.dealId]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.bold}>Title: </Text>
        <Text style={styles.text}>{deal.title}</Text>
        <Text style={styles.bold}>Deal type: </Text>
        <Text style={styles.text}>{deal.dealType}</Text>
        <Text style={styles.bold}>Description: </Text>
        <Text style={styles.text}>{deal.description}</Text>
        <Text style={styles.bold}>Price: </Text>
        <Text style={styles.text}>{deal.price}</Text>
        <Text style={styles.bold}>Extra Images: </Text>
        <Image
          source={{ uri: deal.media && deal.media[1] }}
          style={styles.image}
        />
        <Image
          source={{ uri: deal.media && deal.media[2] }}
          style={styles.image}
        />
      </ScrollView>
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
  text: {
    fontSize: 20,
  },
  bold: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width: 300,
    height: 300,
    margin: 10,
    padding: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    margin: 10,
    padding: 10,
  },
});
