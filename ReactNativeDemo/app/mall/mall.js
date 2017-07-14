
import React, { Component } from 'react';
import { StackNavigator }   from 'react-navigation';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  Button,
  TouchableHighlight
} from 'react-native';


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var requestURL = 'https://tmallapi.bluemoon.com.cn/washMall/item/getRecommendItem?appType=washMall&client=ios&cuid=9FEF140A-C9A4-4282-BDE7-32F72E54139D&format=json&hig=20.71435546875&lat=23.14754054487693&lng=113.5305588397374&sign=af89a02a7f29f990fc3a160bb7686048&time=1499830867&version=1.8.0'



export default class Mall extends React.Component {
  static navigationOptions = {
    title: '月亮商城',
  };

/*****************************************/
/*****************生命周期*****************/
/*****************************************/

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      loaded:false,
      
    };
  }


  render() {
    return this.setupUI()
  }

    componentDidMount() {
    let data =  {}
    this.fetchData(requestURL, data, function(set){
      var productList = set['recommendManage']
      console.log(productList)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(productList),
        loaded: true,
      });
    }.bind(this));
  }

/*****************************************/
/*****************设置UI*****************/
/*****************************************/

  setupUI() {
    return (
      <ListView 
        style={{paddingTop:0}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.rendRowView(rowData)}
        renderFooter = {() => this.renderFooterView()}
      />
    )
  }

  rendRowView(rowData) {
    var imageHeight = rowData['imageVo']['height']
    var imageWidth  = rowData['imageVo']['width']
    var scaleWidth  = ScreenWidth
    var scaleHeiht  =  ScreenWidth * imageHeight / imageWidth
    var imageUrl    = rowData['imageVo']['picUrl']
    console.log('imageHeight=%s, imageWidth=%s\n scaleHeiht=%s, scaleWidth=%s,\n imageUrl',imageHeight,imageWidth,scaleHeiht,scaleWidth,imageUrl)
    return (
      <TouchableHighlight onPress = {this.onPressRow.bind(this)}>
        <View style={[styles.listRow,{height:scaleHeiht}]}>
          <Image
            style={{height:scaleHeiht, width:scaleWidth}}
            resizeMode={Image.resizeMode.stretch}
            source={{uri: imageUrl}}
          />
        </View>
      </TouchableHighlight>
    )
  }

  renderFooterView (){
    return (
      <View style={styles.footerView}>
        <Text style={styles.footerViewText}>
          查看所有产品
        </Text>
      </View>)
  }


/*****************************************/
/*****************私有方法*****************/
/*****************************************/

  onPressRow(){
    const { navigate } = this.props.navigation;
    navigate('ProductDetail')
  }

  fetchData(url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }
    fetch(url, fetchOptions)
      .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
    }).done();
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
    flex:1,
    // paddingLeft:10,
    // paddingRight:10,
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    borderColor:'#e8e8e8',
    borderStyle: 'solid',
    borderBottomWidth:1,
    // backgroundColor:randomColor()
  },
  footerViewText:{
    fontSize:18,
    color:'#999999',

  },
  footerView:{
    margin:10,
    height: 44,
    backgroundColor:'whitesmoke',
    width: ScreenWidth-20,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
