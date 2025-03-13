import {StyleSheet} from 'react-native';
import {Spacing} from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    borderWidth: 1,
    width: '100%',
    padding: 30,
    borderColor: 'gray',
    borderRadius: 10,
    gap: 20,
  },
  heading: {
    fontWeight: '700',
    fontSize: 25,
  },
  header: {
    gap: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  inputContainer: {
    gap: 15,
  },
  bottomText: {
    color: 'gray',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    borderColor: 'gray',
  },
  rowButtonText: {
    flexDirection: 'row',
    gap: 5,
  },
  buttonView: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signInView:{
    flexDirection:'row',
    justifyContent:'center'
  },
  sideHeading:{
    fontWeight:400,
    fontSize:16,
  },
});

export default styles;
