
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight, SectionList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { HomeNewsJSON } from "../../../../assects/JSON/HomeNewsRawData"
import { Topic } from '../Topic'

class HomeNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ""
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    var data = []
    var jsondata = HomeNewsJSON["items"]
    // console.log(alldata)
    // console.table(alldata)
    alert(jsondata.length)
    // var alldata = []
    // axios    
    //   .post(
    //     SERVER_IP +
    //     `\getAmbulanceTraffic?traffID=${this.state.traffID}`
    //   )
    //   .then((res) => {
    //     // console.log(res)
    //     var ambul = res['data']['activeSOS']
    //     console.log(ambul.length)
    //     for (let index = 0; index < ambul.length; index++) {
    //       console.log(ambul[index]['hospital_name'])
    //       alldata.push(ambul[index])

    //     }
    this.setState({
      news: jsondata
    })
    // }
    // )
    // .catch((error) => {
    //   console.log(error)
    // })
  }
  renderImage(item) {
    var a = item.description;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: "row",
          aspectRatio: 4.5
        }}>
        <Image style={{
          flex: 0.4, resizeMode: "center",
          height: 100,
          // width: 40,
          marginRight: 4
        }} source={{ uri: (a.slice(a.indexOf("src") + 5, a.indexOf("</a>") - 3)) }}></Image>
        <Text style={{ flex: 0.6, marginLeft: 4 }}>{item.title}</Text>
      </View>
    )
  }

  render() {
    var result = Object.entries(this.state.news);
    console.log(result)
    // console.log("------------------------")
    // console.log(result.length)
    // // con
    return (
      <View>
              <View style={{
        flex: 1,
        flexDirection: "row"
      }}>
        <View style={{
          flex: 0.9,
          marginTop: 4,
          marginBottom: 4,
          marginRight: 6,
          marginLeft: 6
        }}>
          <Text>HomeNews</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={1}
            keyExtractor={item => item.findIndex}
            data={result}
            renderItem={({ item }) => (
              <View style={{
                flex: 1,
                flexDirection: 'column',
                borderWidth: 4,
                borderRadius: 6,
                borderColor: "#fff"
              }}>
                {/* {item[1]["title"]}
              {item[1]["created"]} */}
                <TouchableOpacity>
                  {this.renderImage(item[1])}
                  {/* <Text>{item[1]["title"]}</Text> */}
                </TouchableOpacity>
                {/* <Text>{this.renderPic(item[1]["description"])}</Text> */}
                {/* <Text>{typeof(item[1]["description"])}</Text> */}
              </View>
            )}
          />
          {/* <ul>
          {result.map(item => (
            <li key={item}>
              otp: {item.title}
            </li>
          ))}

        </ul> */}
          {/* <SectionList
            sections={result}
            // keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          /> */}

          {/* <SectionList
          style={{ margin: 40 }}
          sections={this.state.news}
          renderRow={this.renderRow}
        />
        <SectionList
          sections={result}
          // keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
        </View>
        <View style={{
          flex: 0.1
        }}>
          {/* <ScrollView showsVerticalScrollIndicator={false}>
            <Topic />
          </ScrollView> */}
        </View>
      </View>
      </View>

    )
  }
}

export default HomeNews