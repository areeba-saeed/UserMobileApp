import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { windowHeight, windowWidth } from '../utils/Dimensions';

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['S.No', 'UID', 'Status', 'Refuel'],
      tableData: [
        ['1', 'U001', '10%', 'Refill'],
        ['2', 'U002', '10%', 'Refill'],
        ['3', 'U003', '40%', 'Refill'],
        ['4', 'U004', '60%', 'Refill'],
        ['5', 'U005', '0%', 'Refill'],
        ['6', 'U006', '4%', 'Refill'],
        ['7', 'U007', '1%', 'Refill'],
        ['8', 'U008', '5%', 'Refill'],
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Refill</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{
        height:windowHeight,
        width:windowWidth,
      }}>
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10, 
    paddingTop: 30, 
  },
  head: { 
    height: 70, 
    backgroundColor: '#808B97' 
  },
  text: { 
    margin: 8, 
  },
  row: { 
    flexDirection: 'row', 
    backgroundColor: 'lightgray', 
  },
  btn: { 
    width: 60, 
    height: 20, 
    backgroundColor: '#78B7BB',  
    borderRadius: 2 
  },
  btnText: { 
    textAlign: 'center', 
    color: '#fff' 
  },
});