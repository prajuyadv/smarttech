import {StyleSheet} from 'react-native';
import {fontSize, Spacing} from '../../constants/dimensions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { fontFamily } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex:1,
  },
  scrollViewContainer:{
    padding: Spacing.md,
    flexGrow:1,
  },
  titleContainer:{
    flexDirection:'row',
  },
  titleWrapper:{
    flex:1,
  },
  titleText:{
    fontFamily:fontFamily.bold,
    color:Colors.black,
  },
  brandText:{
    fontFamily:fontFamily.md,
    color: Colors.gray,
    fontSize:fontSize.sm,
    paddingVertical:Spacing.sm,
  },
  ratingWrapper:{
    flexDirection:'row',
    alignItems:'center',
    gap:Spacing.sm,
    backgroundColor:Colors.gray,
    borderRadius:Spacing.md,
    padding:Spacing.sm,
    height:50,
marginTop:Spacing.sm,
  },
  ratingText:{
    color:Colors.gray,
    fontFamily:fontFamily.md,
    fontSize:fontSize.md,
  },
  colorTextViewContainer:{
    paddingTop:Spacing.md,
  },
  colorHeading:{
    fontFamily:fontFamily.semibold,
    fontSize:fontSize.md,
    color:Colors.black,
    // padding:Spacing.sm,
    paddingBottom:Spacing.md,
    alignSelf:'flex-start',
  },
  selectColorContainer:{
  borderWidth:1,
  borderColor:Colors.gray,
  borderRadius:4,
  padding:Spacing.sm,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  },
  circleColor:{
    height:Spacing.md,
    width:Spacing.md,
    backgroundColor:Colors.purple,
    borderRadius:Spacing.md / 2,
  },
  colorText:{
    fontSize:fontSize.sm,
    fontFamily:fontFamily.medium,
    color:Colors.black,
  },
  detailsReviewTabs:{
    flexDirection:'row',
    paddingTop:Spacing.lg,
    gap:Spacing.lg,
  },
  tabText:{
    fontSize:fontSize.medium,
    fontFamily:fontFamily.medium,
    color:Colors.gray,
  },
  underline:{
  borderBottomColor:Colors.purple,
  borderBottomWidth:2,
  width:'50%',
  marginTop:Spacing.xs,
  },
  detailsContent:{
    color:Colors.gray,
    fontFamily:fontFamily.regular,
    fontSize:fontSize.medium,
    paddingVertical:Spacing.xs,
    paddingBottom:200,
  },
});

export default styles;
