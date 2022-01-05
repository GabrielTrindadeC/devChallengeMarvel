import * as React from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import Caracters from './../../../assets/application.json'
import {Characters} from './components/CharacterList'
import styles from './styles';
function HomeScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>
        Heroís
      </Text>

      <Characters data={Caracters.heroes}/>

      <Text style={styles.title}>
        Vilões
      </Text>

      <Characters data={Caracters.villains}/>

      <Text style={styles.title}>
        Anti-heroís
      </Text>

      <Characters data={Caracters.antiHeroes}/>
      <Text style={styles.title}>
        Alienígenas
      </Text>

      <Characters data={Caracters.aliens}/>
      
      <Text style={styles.title}>
        Humanos
      </Text>
      <Characters data={Caracters.humans}/>
    </ScrollView>
  );
}
export default HomeScreen
