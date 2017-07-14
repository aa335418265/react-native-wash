import { StackNavigator } 	from 'react-navigation';
import ProductDetail 		from '../mall/productdetail.js'
import RootTabNavigator 	from './roottabnavigator.js'


const RootNavigator = StackNavigator({
  RootTabNavigator:{screen:RootTabNavigator},
  ProductDetail: { screen: ProductDetail },
},{
  // headerMode: 'none',
});

export default RootNavigator;