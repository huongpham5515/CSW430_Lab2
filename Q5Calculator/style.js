import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '65%'
  },
  display: {
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    marginRight: 20,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
  },
  buttonText: {
    fontSize: 26,
    color: 'black',
  },
  zeroButton: {
    width: 176,
  },
  plusButton: {
    width: 90
  },
  equalButton: {
    backgroundColor: '#f8a71a',
    width: 70
  },
  clearButton: {
    backgroundColor: '#ddd',
    width: '100%', 
    height: 80,
    borderRadius: 40,
    marginTop: 8,
    alignItems: 'center',
    justifyContent:'center'
  },
});
