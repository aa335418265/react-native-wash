
import { TabNavigator } from 'react-navigation';
import BBS 			from '../bbs/bbs.js'
import Mall 		from '../mall/mall.js'
import My 			from '../my/my.js'
import Science 		from '../science/science.js'
import Wash 		from '../wash/wash.js'

const RootTabNavigator = TabNavigator({
  Science:{ screen:Science },
  BBS    :{ screen:BBS },
  Wash   :{ screen:Wash },
  Mall   :{ screen:Mall },
  My     :{ screen:My },
},{
	tabBarPosition:'bottom',
  	tabBarOptions:{
    	activeTintColor: '#e91e63',

  }
})

export default RootTabNavigator