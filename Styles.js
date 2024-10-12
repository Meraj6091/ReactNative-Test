import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  planetCard: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  planetImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  planetName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planetClimate: {
    fontSize: 14,
    color: '#555',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: 'blue',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
