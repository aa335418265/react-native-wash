
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Button,
  View
} from 'react-native';


export default class My extends Component {
    static navigationOptions = {
    title: '我的',
  };
  // UI渲染器, UI布局
  render() {
    return this.setupUI()
  }
  // 构造器， 数据初始化
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  rendRowView = (rowData) => {
    return (
        <View style={styles.listRow}>
          <Text style={styles.listText}>
          {rowData}
          </Text>
        </View>
      )
  }

  setupUI = (argument) => {
    return (
      <ListView 
          style={{paddingTop:0}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.rendRowView(rowData)}
        />
      )
  }

  onPressLearnMore = (argument) => {

  }

}



function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
  }

const styles = StyleSheet.create({
  listRow:{
    paddingLeft:10,
    justifyContent:'center',
    height:44,
    borderColor:'#e8e8e8',
    borderBottomWidth:0.5,
    backgroundColor:randomColor()
  },
  listText:{
    fontSize:20,
    color:'#ffffff'
  }
})