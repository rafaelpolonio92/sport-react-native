import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    height: 150,              // Example height, adjust as needed
    width: '100%',            // Takes full available width of the container
    justifyContent: 'center', 
    alignItems: 'center',   
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Anton-Regular',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  mapContainer: {
    height: 300, // specify height for map
    marginBottom: 20,
  },
  trickCardsContainer: {
    flex: 1,
  },
});