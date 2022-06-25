import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
function DetailNews(navigation) {
  console.log(navigation.route.params);
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <StatusBar hidden />
      <View style={{ position: "relative" }}>
        <Image
          resizeMode="cover"
          source={require("./2.jpg")}
          style={{
            height: "70%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></Image>
      </View>
      <View
        style={{
          position: "absolute",
          top: "40%",
          left: "10%",
          height: "20%",
          width: "80%",
          borderRadius: 30,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "black", fontSize: 12, fontWeight: "200" }}>
          Sunday, 9 May 2021
        </Text>
        <Text
          style={{
            marginBottom: 20,
            color: "black",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Crypto investors should be prepared to lose all their money, BOE
          governor says
        </Text>
        <Text
          style={{
            marginBottom: 10,
            color: "black",
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Published by Ryan Browne
        </Text>
        <View style={{ position: "absolute" }}>
          <Text>
            LONDON — Cryptocurrencies “have no intrinsic value” and people who
            invest in them should be prepared to lose all their money, Bank of
            England Governor Andrew Bailey said. Digital currencies like
            bitcoin, ether and even dogecoin have been on a tear this year,
            reminding some investors of the 2017 crypto bubble in which bitcoin
            blasted toward $20,000, only to sink as low as $3,122 a year later.
            Asked at a press conference Thursday about the rising value of
            cryptocurrencies, Bailey said: “They have no intrinsic value. That
            doesn’t mean to say people don’t put value on them, because they can
            have extrinsic value. But they have no intrinsic value.” “I’m going
            to say this very bluntly again,” he added. “Buy them only if you’re
            prepared to lose all your money.” Bailey’s comments echoed a similar
            warning from the U.K.’s Financial Conduct Authority. “Investing in
            cryptoassets, or investments and lending linked to them, generally
            involves taking very high risks with investors’ money,” the
            financial services watchdog said in January. “If consumers invest in
            these types of product, they should be prepared to lose all their
            money.” Bailey, who was formerly the chief executive of the FCA, has
            long been a skeptic of crypto. In 2017, he warned: “If you want to
            invest in bitcoin, be prepared to lose all your money.”
          </Text>
        </View>
      </View>
    </View>
  );
}

export default DetailNews;
