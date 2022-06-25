// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StatusBar,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Button, Image, Text } from "react-native-elements";
import {
  gray_color,
  main_background,
  primary_color,
  secondary_color,
} from "../assets/Colors";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
export function HomeScreen() {
  const DATA = [
    {
      id: "1",
      author: "Ryan Richard",
      headline:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      bottomLine:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      imgUrl: require("./1.png"),
    },
    {
      id: "2",
      author: " Dr.Ryan Richard",
      headline:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      bottomLine:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      imgUrl: "",
    },
    {
      id: "3",
      author: " Dr.Ryan Richard",
      headline:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      bottomLine:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      imgUrl: "",
    },
    {
      id: "4",
      author: " DssDr.Ryan Richard",
      headline:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      bottomLine:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      imgUrl: "",
    },
  ];
  const CATEGORIES = [
    { id: 1, name: "Health" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Arts" },
    { id: 5, name: "Sports" },
    { id: 6, name: "Stocks" },
    { id: 7, name: "Space" },
  ];
  // Latest News Card
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginTop: 10,
          position: "relative",
          marginLeft: 10,
        }}
      >
        <Image
          resizeMode="contain"
          source={require("./2.jpg")}
          style={{
            width: 280,
            height: 221,
            borderRadius: 16,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        ></Image>
        <View style={{ position: "absolute", top: 40, left: 10 }}>
          <Text
            style={{
              marginTop: 10,
              color: "white",
              fontSize: 12,
              fontWeight: "100",
            }}
          >
            {item.author}
          </Text>
          <Text
            style={{
              marginBottom: 10,
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {item.headline}
          </Text>
          <Text
            style={{
              marginTop: 40,
              color: "white",
              fontSize: 10,
              fontWeight: "100",
            }}
          >
            "{item.bottomLine}"
          </Text>
        </View>
      </View>
    );
  };
  //Category Item
  const categoryItem = ({ item }) => {
    return (
      <Button
        buttonStyle={{
          backgroundColor: primary_color,
          borderRadius: 16,
          marginLeft: 10,
          paddingHorizontal: 15,
        }}
        titleStyle={{
          fontSize: 12,
          fontWeight: "100",
        }}
        title={item.name}
      />
    );
  };
  return (
    <View
      style={{
        marginTop: StatusBar.height,
        backgroundColor: main_background,
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={main_background} barStyle="dark-content" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 5,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Earthquake in Afghanistan!"
          style={{
            borderWidth: 0.3,
            borderColor: "#818181",
            borderRadius: 30,
            width: "70%",
            paddingHorizontal: 5,
            paddingLeft: 10,
          }}
        />
        <Button
          title=""
          icon={<Icon name="search" size={15} color="#111111" />}
          buttonStyle={{
            backgroundColor: "transparent",
            borderColor: "#818181",
            borderWidth: 1,
            padding: 7,
          }}
        />
        <Button
          title=""
          icon={<Icon name="bell-o" size={15} color="white" />}
          buttonStyle={{
            backgroundColor: primary_color,
            borderRadius: 90,
            padding: 9,
          }}
        />
      </View>
      {/* Latest News Section */}
      {/* Latest News Heading */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: "3%",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Latest News</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 12, fontWeight: "100", color: secondary_color }}
          >
            See All{" "}
          </Text>
          <Icon
            name="arrow-right"
            color={secondary_color}
            style={{ fontWeight: "100" }}
          />
        </View>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          renderItem={categoryItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("./1.png")}
            style={{
              width: "100%",
              height: 128,
              borderRadius: 8,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          ></Image>
          <View style={{ position: "absolute", left: 20, top: 8 }}>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "200",
                textAlign: "center",
              }}
            >
              4 ways families can ease anxiety together
            </Text>
            <View
              style={{
                marginTop: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "200",
                    textAlign: "left",
                  }}
                >
                  Zain Korsgaard
                </Text>
              </View>
              <View>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "200" }}
                >
                  Sunday, 9 May 2021
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("./2.jpg")}
            style={{
              width: "100%",
              height: 128,
              borderRadius: 8,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          ></Image>
          <View style={{ position: "absolute", left: 20, top: 8 }}>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "200",
                textAlign: "center",
              }}
            >
              4 ways families can ease anxiety together
            </Text>
            <View
              style={{
                marginTop: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "200",
                    textAlign: "left",
                  }}
                >
                  Zain Korsgaard
                </Text>
              </View>
              <View>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "200" }}
                >
                  Sunday, 9 May 2021
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("./3.jpg")}
            style={{
              width: "100%",
              height: 128,
              borderRadius: 8,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          ></Image>
          <View style={{ position: "absolute", left: 20, top: 8 }}>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "200",
                textAlign: "center",
              }}
            >
              4 ways families can ease anxiety together
            </Text>
            <View
              style={{
                marginTop: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "200",
                    textAlign: "left",
                  }}
                >
                  Zain Korsgaard
                </Text>
              </View>
              <View>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "200" }}
                >
                  Sunday, 9 May 2021
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 15,
            marginVertical: 10,
          }}
        >
          <Button
            buttonStyle={{
              backgroundColor: primary_color,
              borderRadius: 16,
              marginLeft: 10,
              paddingHorizontal: 15,
            }}
            titleStyle={{
              fontSize: 12,
              fontWeight: "100",
            }}
            title="Explore More"
          />
        </View>
      </ScrollView>
    </View>
  );
}
