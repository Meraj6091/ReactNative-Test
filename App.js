import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './Styles';
import axios from 'axios';
import {fetchPlanetsApi} from './ApiEndPoints';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // Fetch data using axios
  const fetchPlanets = async () => {
    try {
      const response = await axios.get(fetchPlanetsApi());
      setPlanets(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets(); //call the func when the component is mount
  }, []);

  // Loading indicator
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  // Render planet details
  const renderPlanetDetails = () => {
    if (!selectedPlanet) return null;

    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          Planet Name: {selectedPlanet.name}
        </Text>
        <Text style={styles.detailText}>
          Orbital Period: {selectedPlanet.orbital_period}
        </Text>
        <Text style={styles.detailText}>Gravity: {selectedPlanet.gravity}</Text>
        <TouchableOpacity onPress={() => setSelectedPlanet(null)}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render list of planets
  return (
    <View style={styles.container}>
      {selectedPlanet ? (
        renderPlanetDetails()
      ) : (
        <FlatList
          data={planets}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelectedPlanet(item)}
              style={styles.planetCard}>
              <Image
                source={{uri: `https://picsum.photos/seed/${item.name}/100`}}
                style={styles.planetImage}
              />
              <View>
                <Text style={styles.planetName}>{item.name}</Text>
                <Text style={styles.planetClimate}>
                  Climate: {item.climate}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default App;
