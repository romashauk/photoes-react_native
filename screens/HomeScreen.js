import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

class HomeScreen extends React.Component {
  showInfoPress = user => {
    this.props.navigation.navigate('LinksScreen', { name: user.user.username });
  };
  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }

  render() {
    const { users, productsLoading } = this.props;

    if (!users && productsLoading) {
      return <Text>Loading</Text>;
    }

    return (
      <ScrollView style={styles.container}>
        {users.map((item, i) => {
          return (
            <TouchableOpacity
              style={styles.wrapper}
              key={i}
              onPress={() => this.showInfoPress(item)}
            >
              <Image
                style={{ width: 170, height: `100%` }}
                source={{ uri: item.urls.small }}
              />
              <View>
                <Text style={styles.title}>
                  {item.user.first_name + ` ` + item.user.last_name}
                </Text>
                <View
                  style={{ paddingLeft: 20, flex: 1, flexDirection: `row` }}
                >
                  <Icon
                    style={{ marginRight: 10 }}
                    name="logo-instagram"
                    type="ionicon"
                    color="#517fa4"
                  />
                  <Text style={{ color: `white`, fontSize: 20 }}>
                    {item.user.instagram_username}
                  </Text>
                </View>
                <Text style={styles.location}>{item.user.location}</Text>

                <View style={styles.statistic}>
                  <Icon name="md-heart" type="ionicon" color="white" />
                  <Text style={styles.info}>{item.user.total_likes}</Text>
                  <Icon
                    style={{ marginRight: 10 }}
                    name="md-photos"
                    type="ionicon"
                    color="white"
                  />
                  <Text style={styles.info}>{item.user.total_photos}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `red`,
  },
  wrapper: {
    width: `100%`,
    flex: 1,
    flexDirection: `row`,
    backgroundColor: `rgba(0,0,0,0.5)`,
    marginTop: 30,
    height: 200,
    borderWidth: 1,
    borderColor: 'white',
  },
  info: {
    color: `white`,
    fontSize: 20,
    marginLeft: 10,
  },
  title: {
    color: `white`,
    marginLeft: 10,
    fontSize: 25,
  },
  location: {
    color: `white`,
    fontSize: 17,
    marginLeft: 30,
  },
  statistic: {
    flexDirection: `row`,
    width: `60%`,
    justifyContent: `space-around`,
    marginBottom: 90,
  },
});
const mapStateToProps = state => {
  const { users } = state;

  return {
    users,
  };
};
export default connect(mapStateToProps)(HomeScreen);
