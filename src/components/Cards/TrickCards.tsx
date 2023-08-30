import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Text  } from 'react-native';

const Cards = () => { // 👈️ takes no props
  return (
    <Card>
      <Card.Title>HELLO WORLD</Card.Title>
      <Card.Image source={require('../../../assets/49ea5d387a6e396de24cb831f23c3cbd.jpg')} />
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card>
  );
};

export default Cards;