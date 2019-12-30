class Home extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight:(<Button title="Cart" onPress={() => navigation.navigate('Cart')}/>)
  })
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Scree</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class Details extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Details',
    headerRight:(<Button title="Cart" onPress={() => navigation.navigate('Cart')}/>)
  })
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
      </View>
    );
  }
}

class Cart extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cart</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    Cart:Cart
  },
  {
    initialRouteName: 'Home',
  }
);