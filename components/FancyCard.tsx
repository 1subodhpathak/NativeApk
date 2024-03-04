import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1291961188/photo/stunning-view-of-the-hawa-mahal-at-sunset-with-blurred-people-walking-during-the-covid-19.jpg?s=1024x1024&w=is&k=20&c=D8GS6Oxytsf7IVj751ue4FDxpgHmNE8l-QDt6VrLoPM=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDesc}>
            The Hawa Mahal is the place in the city of Jaipur, India. Built from
            red and pink sandstone, it is one of the edge of the City Palace
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 375,
    height: 360,
    borderRadius: 6, 
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#a3a0a9',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle:{
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 6
  },
  cardDesc: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 12
  },
  cardFooter: {
    color: '#FFFFFF'
  }
});
