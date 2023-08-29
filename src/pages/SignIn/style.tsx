import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#28282B",
    flex: 1,
    justifyContent: 'flex-end',  // positions children at the bottom
    alignItems: 'center',  // centers children horizontally
    paddingBottom: 110,  // Optional: Add some padding at the bottom if needed
  },
  image: {
    width: 370,
    height: 370,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#ddd',
    borderRadius: 30,
    paddingVertical: 10,
    width: 220,  
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15
  },
  signIn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Anton-Regular',
    marginBottom: 50
  }
});
  