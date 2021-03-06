import React, { Component, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import RNPoll, { IChoice } from "react-native-poll";
import _ from "lodash";
import Search from "../components/Search";
import PersonalityModalScreen from "./PersonalityModalScreen";
import AngelScreen from "./AngelScreen";

const DATA = [
  {
    id: "3ac68afc-c705-40d3-a4f8-fbd918b97f63",
    title: "If I had nine hours to chop down a tree, Iād spend the first six sharpening my axe. ā Abraham Lincoln š­",
    username: "QuoteBot",
    caption: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "My Yummy Lunch!",
    likes: 5,
    imageUrl:
			"https://www.topasiatour.com/pic/Singapore/guide/bak-kut-teh-2.jpg",
    username: "aerrng",
    caption:
			"Delivered from haijiabin bakuteh bowl from @tan.jun.wee, this was outstanding! The ground pork on hand, shredded carrots, coleslaw cabbage mix was amazing. What a beautiful meal! There were no left overs ;-) Thanks Jun Wee for being a great Angel! ",
    url: "https://hanjiabkt.com/wordpress/",
  },
  {
    id: "3ac68afc-c705-40d3-a4f8-fbd918a97f63",
    title: "A new poll is created by @dokey! š Check it out here!",
    username: "PollMaster",
    caption: "",
  },
  {
    id: "3ac68afc-c605-4cv3-a4f8-fbd91aa97f65",
    title: "š Welcome Thom Chua to the team! š",
    imageUrl:
			"https://www.robolink.com/wp-content/uploads/2019/01/han_circle.png",
    username: "thom.chua",
    caption: "",
  },
  {
    id: "3ac68afc-c705-48d3-a4f8-fbd918a97f63",
    title: "š Congrats! @lynnys won 3 points in @GameQuiz & is #4 on leaderboard! š",
    username: "GameMaster",
    caption: "",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "WTS??? WHATS THIS",
    likes: 0,
    imageUrl: "https://yp.sg/wp-content/uploads/2017/06/ufo2.png",
    username: "wheee.geee",
    caption:
			"Saw this alien like thing flew past my window? Anyone got any idea?? Are we getting eaten by aliens?!?!",
  },
  {
    id: "3ac68arsdcc-c605-48d3-a4f8-fbd91aa97f63",
    title: "š¢š¢š¢TECH TEAM GAME NIGHT 18 JUNE 7PM!š¢š¢š¢ ",
    username: "GameMaster",
    caption: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Yo anyone wna join me to watch this?",
    likes: 5,
    imageUrl:
			"https://i1.sndcdn.com/artworks-xJyBsmHzLbJgaAr6-yDrC3A-t500x500.jpg",
    username: "tan.jun.wee",
    caption:
			"Dope af remix! Anyone down to watch phua chu kang new hit song with me this Saturdayday 10pm? Open jio everyone!",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b0",
    title: "My Dog Bobby",
    likes: 5,
    imageUrl:
			"https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Pet-Dog.jpg",
    username: "don_key",
    caption:
			"Just adopted a new dog over the weekend! Say hi to bobby (: He's a german shepard mix maltese and he looooooooooooves grapes ((((:",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Baked some fresh brownies! Anyone wanna be my guinea pig?",
    likes: 5,
    imageUrl:
			"https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/08/bundt-by-the-backyard-bakers-900x643.png",
    username: "aerrng",
    caption:
			"Hazelnut lava brownies dazzled with honey with a little surprise inside! Let me know if youre wanna try, dont mind delivering it to you (:",
  },
];

const choices: Array<IChoice> = [
  { id: 1, choice: "Nike", votes: 12 },
  { id: 2, choice: "Adidas", votes: 1 },
  { id: 3, choice: "Puma", votes: 3 },
  { id: 4, choice: "Reebok", votes: 5 },
  { id: 5, choice: "Under Armour", votes: 9 },
];

// TODO: pass in items param to render this for all posts
const Post = ({ title, imageUrl, username, caption, likes, url }) => (
  <Card containerStyle={styles.cardBox}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
					@{username}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../assets/icons/dots.png")}
          style={styles.threedot}
        />
      </TouchableOpacity>
    </View>

    <Card.Divider />

    {imageUrl && <Image source={imageUrl} style={styles.image} />}

    {imageUrl && (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Hearts likes={likes} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/forward.png")}
            style={styles.heart}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/iconaeroplane.png")}
            style={styles.heart}
          />
        </TouchableOpacity>
      </View>
    )}

    <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 5 }}>
      {title}
    </Text>
    <Text>{caption}</Text>
    <TouchableOpacity
      style={{ textDecorationLine: "underline", marginVertical: 5 }}
    >
      <Text>{url}</Text>
    </TouchableOpacity>
  </Card>
);

function Hearts({ likes }) {
  if (likes === 0) {
    return (
      <Image
        source={require("../assets/icons/heart.png")}
        style={styles.heart}
      />
    );
  } else {
    return (
      <Image
        source={require("../assets/icons/hearted.png")}
        style={styles.heart}
      />
    );
  }
}

export default class TabOneScreen extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      searchQuery: "",
      displayedData: DATA,
      modal: 0,
      title: "",
      text: "",
      pollModal: 0,
    };
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.setPollModal = this.setPollModal.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  componentDidMount() {
    this.setState({ displayedData: DATA });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.searchQuery !== nextState.searchQuery) {
      this.searchFilterFunction();
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
  }

  setSearchQuery(searchQuery: string) {
    this.setState({ searchQuery: searchQuery });
  }

  setModal(modal) {
    this.setState({ modal });
  }

  onChangeTitle(title) {
    this.setState({ title });
  }

  onChangeText(text) {
    this.setState({ text });
  }

  setPollModal(pollModal) {
    this.setState({ pollModal });
  }

	searchFilterFunction = _.debounce(() => {
	  const text = this.state.searchQuery.toLowerCase();
	  const newData = DATA.filter(function (item) {
	    return (
	      item.title.toLowerCase().includes(text) ||
				item.username.toLowerCase().includes(text) ||
				item.caption.toLowerCase().includes(text)
	    );
	  });
	  this.setState({ displayedData: newData });
	}, 150);

	render() {
	  const renderItem = ({ item }) => (
	    <Post
	      key={item.id}
	      title={item.title}
	      imageUrl={item.imageUrl}
	      username={item.username}
	      caption={item.caption}
	      url={item.url}
	      likes={item.likes}
	    />
	  );

	  const renderPollItem = () => (
	    <RNPoll
	      totalVotes={30}
	      choices={choices}
	      onChoicePress={(selectedChoice: IChoice) =>
	        console.log("SelectedChoice: ", selectedChoice)
	      }
	    />
	  );

	  return (
	    <SafeAreaView>
	      <View style={styles.header}>
	        <View style={styles.headerText}>
	          <Text
	            style={{
	              fontSize: 15,
	              marginBottom: 5,
	            }}
	          >
							Good Afternoon š
	          </Text>
	          <Text
	            style={{
	              fontSize: 25,
	              fontWeight: "bold",
	            }}
	          >
							Aerin Ng Na Na
	          </Text>
	        </View>
	        <Image
	          source={require("../assets/images/profilepic.png")}
	          style={styles.myImage}
	        />
	      </View>

	      <ScrollView
	        contentContainerStyle={styles.container}
	        showsVerticalScrollIndicator={false}
	      >
	        <View>
	          <View style={styles.actionRow}>
	            <Search setSearchQuery={this.setSearchQuery} />
	            <TouchableOpacity
	              style={styles.addContainer}
	              onPress={() => this.setModal(1)}
	            >
	              <Image
	                source={require("../assets/icons/writeicon.png")}
	                style={styles.writeicon}
	              />
	            </TouchableOpacity>
	          </View>
	          <View
	            style={{
	              flexDirection: "row",
	              justifyContent: "space-between",
	              alignItems: "center",
	            }}
	          >
	            <Text
	              style={{
	                fontSize: 15,
	                fontWeight: "bold",
	                marginLeft: 20,
	                marginTop: 20,
	                marginBottom: 10,
	              }}
	            >
								Categories
	            </Text>
	            <TouchableOpacity>
	              <Image
	                source={require("../assets/icons/premium.png")}
	                style={styles.threedot2}
	              />
	            </TouchableOpacity>
	          </View>

	          <View style={styles.actionRow}>
	            <TouchableOpacity
	              style={styles.iconBox}
	              onPress={() => this.setModal(2)}
	            >
	              <Image
	                source={require("../assets/images/cake.png")}
	                style={styles.icon}
	              />
	            </TouchableOpacity>
	            <TouchableOpacity
	              style={styles.iconBox}
	              onPress={() => this.setModal(5)}
	            >
	              <Image
	                source={require("../assets/images/angel.png")}
	                style={{ width: 45, height: 40 }}
	              />
	            </TouchableOpacity>
	            <TouchableOpacity
	              style={styles.iconBox}
	              onPress={() => this.setModal(4)}
	            >
	              <Image
	                source={require("../assets/icons/hearticon.png")}
	                style={{ width: 40, height: 38 }}
	              />
	            </TouchableOpacity>
	            <TouchableOpacity
	              style={styles.iconBox}
	              onPress={() => this.setPollModal(1)}
	            >
	              <Image
	                source={require("../assets/images/cloudbubble.png")}
	                style={styles.icon}
	              />
	            </TouchableOpacity>
	          </View>

	          <Text
	            style={{
	              fontSize: 15,
	              fontWeight: "bold",
	              marginLeft: 20,
	              marginTop: 20,
	            }}
	          >
							Your Feed
	          </Text>

	          <FlatList
	            data={this.state.displayedData}
	            renderItem={renderItem}
	            keyExtractor={(item) => item.id}
	          />
	        </View>
	      </ScrollView>

	      <Modal
	        avoidKeyboard={true}
	        transparent={true}
	        visible={this.state.modal !== 0}
	        onRequestClose={() => this.setModal(0)}
	      >
	        {this.state.modal === 1 && (
	          <View style={styles.modalContainer}>
	            <View style={styles.modalContent1}>
	              <View style={styles.modalContent}>
	                <TouchableOpacity
	                  style={{ alignSelf: "flex-start" }}
	                  onPress={() => this.setModal(0)}
	                >
	                  <Image
	                    source={require("../assets/icons/cross.png")}
	                    style={styles.cross}
	                  />
	                </TouchableOpacity>

	                <Text style={styles.modalHeader}>
										Post It!
	                </Text>
	                <View
	                  style={{
	                    flexDirection: "row",
	                    alignItems: "center",
	                    justifyContent: "center",
	                    marginVertical: 10,
	                    width: "100%",
	                  }}
	                >
	                  <Image
	                    source={require("../assets/icons/camera2.png")}
	                    style={styles.camera}
	                  />
	                  <Text
	                    style={{
	                      width: 80,
	                      textAlign: "left",
	                      color: "#808080",
	                    }}
	                  >
											Upload {"\n"}Your Photo
	                  </Text>
	                </View>

	                <TextInput
	                  style={styles.input}
	                  onChangeText={this.onChangeTitle}
	                  value={this.state.title}
	                  placeholder="Title"
	                />

	                <TextInput
	                  style={styles.input2}
	                  onChangeText={this.onChangeText}
	                  value={this.state.text}
	                  placeholder="Share more about it (:"
	                  multiline={true}
	                />

	                <View
	                  style={{
	                    marginTop: 10,
	                    marginBottom: 20,
	                  }}
	                >
	                  <Button
	                    titleStyle={{ fontSize: 15 }}
	                    title="Submit"
	                    buttonStyle={{
	                      backgroundColor: "#8741bb",
	                      paddingVertical: 8,
	                    }}
	                    onPress={() => this.setModal(0)}
	                  />
	                </View>

	                <Text style={{ marginTop: 15 }}>
										Sync to your other social medias too!
	                </Text>
	                <View style={{ flexDirection: "row" }}>
	                  <TouchableOpacity>
	                    <Image
	                      source={require("../assets/icons/instagram.png")}
	                      style={styles.smIcon}
	                    />
	                  </TouchableOpacity>
	                  <TouchableOpacity>
	                    <Image
	                      source={require("../assets/icons/facebook.png")}
	                      style={styles.smIcon}
	                    />
	                  </TouchableOpacity>
	                  <TouchableOpacity>
	                    <Image
	                      source={require("../assets/icons/twitter.png")}
	                      style={styles.smIcon}
	                    />
	                  </TouchableOpacity>
	                  <TouchableOpacity>
	                    <Image
	                      source={require("../assets/icons/youtube.png")}
	                      style={styles.smIcon}
	                    />
	                  </TouchableOpacity>
	                </View>
	              </View>
	            </View>
	          </View>
	        )}
	        {this.state.modal === 2 && (
	          <View style={styles.modalContainer}>
	            <View style={styles.modalContent1}>
	              <View style={styles.modalContent}>
	                <View
	                  style={{
	                    flexDirection: "row",
	                    alignItems: "center",
	                  }}
	                >
	                  <TouchableOpacity
	                    style={{ alignSelf: "flex-start" }}
	                    onPress={() => this.setModal(0)}
	                  >
	                    <Image
	                      source={require("../assets/icons/cross.png")}
	                      style={styles.cross}
	                    />
	                  </TouchableOpacity>
	                  <Image
	                    source={require("../assets/images/birthdays.png")}
	                    style={styles.birthday}
	                  />

	                  <Text style={styles.modalHeader}>
											Birthdays & Worknnivarsaries
	                  </Text>
	                </View>
	                <Text style={styles.titles}>Today's</Text>
	                <TouchableOpacity style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/candle.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{ fontWeight: "bold" }}
	                    >
												Marie Sim
	                    </Text>
	                    <Text>'s birthday today!</Text>
	                  </View>
	                </TouchableOpacity>
	                <Text style={styles.titles}>
										Upcoming's
	                </Text>
	                <View style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/candle.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{
	                        fontWeight: "bold",
	                        fontSize: 12,
	                      }}
	                    >
												Eliz Lu
	                    </Text>
	                    <Text style={{ fontSize: 12 }}>
												's birthday in 3 days!
	                    </Text>
	                  </View>
	                </View>
	                <View style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/medal.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{
	                        fontWeight: "bold",
	                        fontSize: 12,
	                      }}
	                    >
												Lynn Chew
	                    </Text>
	                    <Text style={{ fontSize: 12 }}>
												's 2nd worknnivarsary in 3 days!
	                    </Text>
	                  </View>
	                </View>
	                <View style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/candle.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{
	                        fontWeight: "bold",
	                        fontSize: 12,
	                      }}
	                    >
												Don Key
	                    </Text>
	                    <Text style={{ fontSize: 12 }}>
												's birthday in 5 days!
	                    </Text>
	                  </View>
	                </View>
	                <View style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/medal.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{
	                        fontWeight: "bold",
	                        fontSize: 12,
	                      }}
	                    >
												Matt Tan
	                    </Text>
	                    <Text style={{ fontSize: 12 }}>
												's 5th worknnivarsary in 9 days!
	                    </Text>
	                  </View>
	                </View>
	                <View style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/candle.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{
	                        fontWeight: "bold",
	                        fontSize: 12,
	                      }}
	                    >
												Mee Sua
	                    </Text>
	                    <Text style={{ fontSize: 12 }}>
												's birthday in 10 days!
	                    </Text>
	                  </View>
	                </View>
	                <View style={styles.input3}>
	                  <Image
	                    source={require("../assets/images/candle.png")}
	                    style={styles.candle}
	                  />
	                  <View style={{ flexDirection: "row" }}>
	                    <Text
	                      style={{
	                        fontWeight: "bold",
	                        fontSize: 12,
	                      }}
	                    >
												Mee Pok
	                    </Text>
	                    <Text style={{ fontSize: 12 }}>
												's birthday in 10 days!
	                    </Text>
	                  </View>
	                </View>
	              </View>
	            </View>
	          </View>
	        )}
	      </Modal>
	      <Modal
	        avoidKeyboard={true}
	        transparent={true}
	        visible={this.state.modal === 4}
	        onRequestClose={() => this.setModal(0)}
	      >
	        <PersonalityModalScreen setModal={this.setModal} />
	      </Modal>
	      <Modal
	        avoidKeyboard={true}
	        transparent={true}
	        visible={this.state.modal === 5}
	        onRequestClose={() => this.setModal(0)}
	      >
	        <AngelScreen setModal={this.setModal} />
	      </Modal>
	      <Modal
	        avoidKeyboard={true}
	        transparent={false}
	        visible={this.state.pollModal === 1}
	        onRequestClose={() => this.setPollModal(0)}
	      >
	        <View style={styles.pollModalContainer}>
	          <TouchableOpacity
	            style={{ alignSelf: "flex-start" }}
	            onPress={() => this.setPollModal(0)}
	          >
	            <Image
	              source={require("../assets/icons/cross.png")}
	              style={styles.pollCross}
	            />
	          </TouchableOpacity>
	          <Text
	            style={{
	              fontSize: 25,
	              fontWeight: "bold",
	              marginTop: -15,
	            }}
	          >
							Poll Of The Week
	          </Text>
	          <Text style={{ fontSize: 12 }}>by @wheee.geee</Text>
	          <Text
	            style={{
	              fontSize: 18,
	              fontWeight: "bold",
	              marginTop: 5,
	            }}
	          >
							What is your favourite sports brand?
	          </Text>
	          <RNPoll
	            totalVotes={30}
	            choices={choices}
	            onChoicePress={(selectedChoice: IChoice) =>
	              console.log("SelectedChoice: ", selectedChoice)
	            }
	            style={{ width: "100%", paddingHorizontal: 20 }}
	            pollContainerStyle={{ width: "100%" }}
	          />
	          <Image
	            source={require("../assets/illustrations/ginger-cat-729.png")}
	            style={styles.pollPicture}
	          />
	        </View>
	      </Modal>
	    </SafeAreaView>
	  );
	}
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    height: 660,
  },
  header: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  actionRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headerText: {
    flex: 1,
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  myImage: {
    height: 60,
    width: 60,
    margin: 5,
    alignSelf: "flex-end",
  },
  icon: {
    width: 41,
    height: 31,
  },
  writeicon: {
    width: 20,
    height: 20,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    //   borderColor: '#C0C0C0',
    borderRadius: 30,
    //   borderWidth: 2,
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  iconBox: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  cardBox: {
    borderRadius: 15,
  },
  threedot: {
    height: 25,
    width: 40,
  },
  threedot2: {
    height: 23,
    width: 23,
    marginBottom: -12,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
    marginBottom: 10,
  },
  birthday: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginRight: 5,
    marginTop: 15,
  },
  heart: {
    height: 14.7,
    width: 17,
    marginVertical: 8,
    marginLeft: 0,
    marginRight: 15,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(56, 56, 56, 0.79)",
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 6,
    textAlign: "center",
    borderColor: "#EE82EE",
    borderWidth: 2,
    height: 530,
    width: 310,
  },
  modalContent1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 6,
    textAlign: "center",
    marginHorizontal: 30,
    height: 550,
    width: 330,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    marginTop: -5,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 2,
    // outlineWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
  },

  input2: {
    marginTop: 12,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 2,
    // outlineWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
    height: 150,
    textAlignVertical: "top",
    paddingTop: 15,
  },

  input3: {
    marginTop: 5,
    marginBottom: 7,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 2,
    // outlineWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },

  camera: {
    height: 55,
    width: 55,
    marginRight: 30,
  },

  cross: {
    height: 25,
    width: 25,
    marginTop: -10,
    marginLeft: -10,
    alignSelf: "flex-start",
  },
  pollModalContainer: {
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    marginTop: 40,
  },
  pollCross: {
    height: 25,
    width: 25,
    marginTop: -10,
    marginLeft: 7,
    alignSelf: "flex-start",
  },
  titles: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 3,
    marginTop: 10,
  },
  candle: {
    height: 21,
    width: 17.5,
    margin: 3,
    marginRight: 12,
  },
  pollPicture: {
    height: 400,
    width: 400,
    margin: 3,
    marginTop: -8,
  },
  smIcon: {
    height: 30,
    width: 30,
    margin: 10,
  },
});
