
import React, { Component } from 'react';
import { TabNavigator }     from 'react-navigation';
import ViewPager            from 'react-native-viewpager'; 
import Science              from '../science/science.js'
import Wash                 from '../wash/wash.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Button,
  View,
  Image
} from 'react-native';

const DetailTabNavigator = TabNavigator({
  Science:{ screen:Science },
  Wash    :{ screen:Wash },
},{
  tabBarPosition:'top',
  swipeEnabled:true,
    tabBarOptions:{
      activeTintColor: '#e91e63',
      indicatorStyle:{
        backgroundColor: 'blue',
        width:100,
        height:10,
      },

  }
})


const BANNER_IMGS = [  
    require('../resources/bannerimages/1.jpg'),  
    require('../resources/bannerimages/2.jpg'),  
    require('../resources/bannerimages/3.jpg'),  
    require('../resources/bannerimages/4.jpg'),  
]; 

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;


export default class ProductDetail extends Component {
    static navigationOptions = {
    title: '产品详情',
  };

/*****************************************/
/*****************生命周期*****************/
/*****************************************/

  // UI渲染器, UI布局
  render() {
    return this.setupUI()
  }
  // 构造器， 数据初始化
  constructor(props) {
    super(props);
    var listViewDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var pageViewDataSource = new ViewPager.DataSource({pageHasChanged:(p1, p2) => p1 !== p2});

    this.state = {
      pageViewDataSource: pageViewDataSource.cloneWithPages(BANNER_IMGS),
      listViewDataSource: listViewDataSource.cloneWithRows(['row 1', 'row 2']),
    };
  }


/*****************************************/
/*****************设置UI*****************/
/*****************************************/






  setupUI (argument){
    return (
      <View >
        <View style = {styles.border}>
          <View style={styles.viewPageContainer}>
            <ViewPager 
              style = {styles.pageView}
              dataSource = {this.state.pageViewDataSource}
              renderPage = {(data, pageID) => this.renderPage(data, pageID)}
              autoPlay = {true}
              isLoop = {true}
            />
          </View>

          <Text style={styles.titleText}>
            薰衣草洗衣液你值得拥有薰衣草洗衣液你值得拥有薰衣草洗衣液你值得拥有
          </Text>

          <View style={styles.priceView}>
            <Text style={styles.mainPriceTitle}>
              ￥19.90
            </Text>
            <Text style={styles.subPriceTitle}>
              ￥99.00
            </Text>
          </View>

        </View>
        <View style={{height:40, backgroundColor:'whitesmoke'}}>
          
        </View>
      </View>
    )
  }


  //轮播页视图
  renderPage(data, pageID) {
    return (
      <Image
        style={styles.pageImage}
        source={data}/>
      )
  }




/*****************************************/
/*****************私有方法*****************/
/*****************************************/


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
  border:{
    borderColor:'#cccccc',
    borderStyle: 'solid',
    borderBottomWidth:0.5,
  },
  listRow:{
    paddingLeft:10,
    justifyContent:'center',
    height:44,
    borderColor:'#e8e8e8',
    borderBottomWidth:0.5,
    backgroundColor:randomColor()
  },
  titleText:{
    paddingTop:8,
    paddingLeft:12,
    paddingRight:12,
    lineHeight:23,
    fontSize:17,
    color:'#333333',
    backgroundColor:'white'
  },

  viewPageContainer:{
    height:294,
    width:ScreenWidth,
    overflow:'hidden',
    backgroundColor:'white',
  },
  pageView:{
    flex:1
  },
  priceView:{
    paddingTop:12,
    paddingLeft:12,
    paddingRight:12,
    paddingBottom:20,
    flexDirection:'row',
    backgroundColor:'white',
  },
  mainPriceTitle:{
    color:'#e0483e',
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
  },
  subPriceTitle:{
    marginLeft:8,
    color:'#999999',
    fontSize:10,
    alignSelf:'center',
    textDecorationLine:'line-through',
  },
  pageImage:{
    flex:1,
    height:294,
  }
})