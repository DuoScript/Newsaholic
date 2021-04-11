import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, FlatList, TouchableHighlight, SectionList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native'
import { TopicList } from '../../../assects/ComponentData/TopicList'


class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: ""
        };
    }

    componentDidMount() {
        this.getInfo();
    }
    getTopic() {
        var data = []
        var topicdata = TopicList["topicitems"]
        this.setState({
            topic: topicdata
        })
    }

    renderTopic(item) {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render() {
        var result = Object.entries(this.state.topic);
        console.log(result)
        return (
            <View>
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text>Topic</Text>
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
                                    <TouchableOpacity>
                                        {this.renderTopic(item[1])}
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

export default Topic