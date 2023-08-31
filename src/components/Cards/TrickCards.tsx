import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Text, View  } from 'react-native';

const trickCards = [
  {
    title: 'Ollie',
    description: "The ollie is a skateboarding trick where the rider and board leap into the air without the use of the rider's hands. It is the combination of stomping, also known as popping, the tail of the skateboard off the ground to get the board mostly vertical, jumping, and sliding the front foot forward to level out the skateboard at the peak of the jump.",
    imageUrl: '../../../assets/49ea5d387a6e396de24cb831f23c3cbd.jpg',
    videoUrl: 'https://www.youtube.com/embed/Jig3uiYsb4w'
  },
  {
    title: 'Test',
    description: 'Card description 1',
    imageUrl: '../../../assets/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  {
    title: 'Kickflip',
    description: "The kickflip is a skateboarding trick, in which the rider flips their skateboard 360° along the axis that extends from the nose to the tail of the deck. When the rider is regular footed the board spins counter-clockwise if viewed from the side.",
    imageUrl: '../../../assets/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  // Add more card objects here
];

const Cards = () => { // 👈️ takes no props
  return (
    <View>
      {trickCards.map((card, index) => (
        <Card key={index}>
          <Card.Title>{card.title}</Card.Title>
          <Card.Image source={require('../../../assets/49ea5d387a6e396de24cb831f23c3cbd.jpg')} />
          <Text 
            style={{marginBottom: 10, backgroundColor: "#28282B", color: "white"}}
          >
            {card.description}
          </Text>
          <Button
            buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      ))}
    </View>
  );
};

export default Cards;