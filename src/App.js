import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'material-ui/Grid';
import MenuAppBar from './pcomponents/MenuAppBar';

import EnhancedTable from './pcomponents/EnhancedTable';
import ListOfTables from './pcomponents/ListOfTables';

var initialStore={
  tables:[
    {
      table_id:0,
      table_name:'first',
      columnNames:['row_id','name','class'],
      rows:[
        {
          row_id:0,
          data:'first'
        }
      ]
    }
  ],
  selectedTable:0
}

class App extends Component {
  render() {


    let tableList,onAddTable,selectedTable=0;

    

    return (

      <React.Fragment>

      <MenuAppBar/>

      <Grid container spacing ={ 12 } >
          <Grid item xs={12} sm={3}>
          <ListOfTables/>
        </Grid>
        <Grid item xs={ 12 } sm={ 9 }>
        <EnhancedTable tableName={""} rows={[]} columns={[]} onAddRow={()=>{}} onDeleteRow={()=>{}}/>
       
        </Grid>
        </Grid>
  </React.Fragment>
    );
  }
}

export default App;
