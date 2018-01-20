import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import DeleteIcon from 'material-ui-icons/Delete';
import Chip from 'material-ui/Chip';

function rand() {
    return Math.floor(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        position: 'relative',
        width: 8 * 40,
        //   top: `${top}%`,
        //   left: `${left}%`,
        //  transform: `translate(-${top}%, -${left}%)`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 'auto',
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
        padding: 8 * 4,
        margin: 'auto',
        display: 'inline-block'
    };
}

var styles = {
    button: {
        right: 0,
        bottom: 0,
        position: 'absolute',
        padding: 5,
        margin: 5

    },
    textField: {

        /// display : 'block',
        width: 'auto',
        minWidth: '250px'
    },
    deleteButton: {
        width: '5px',
        height: '5px',

    },
    flable: {
        display: 'block',
        margin: 10,
        width: '100%'
    },

}

class AddTable extends Component {

    state = {

        table_name: '',

        columnNames: [],

        newField: '',

    }

    onAddTable() {

      if(  this.state.columnNames.length==0 ) return
        
        this.props.onAddTableResult(
            {
                table_name: this.state.table_name,
                columnNames: this.state.columnNames
            }
        );
    }



    handleClose = () => {
        this.props.closeAddTable();
    };



    render() {

        return <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.openAddTable}
            onClose={this.handleClose}
        >

          

            <div style={getModalStyle()}>


                <Typography type="title" id="modal-title">
                    <TextField
                label="Table Name"
                value={this.state.table_name}
                //  onChange={this.handleChange('name')}
                margin="normal"
                onChange={
                    (e) => {
                        this.setState({
                            table_name: e.target.value
                        })
                    }
                }
                style={styles.textField}
            />
            </Typography>
                <Typography type="subheading" id="simple-modal-description">


                    {this.state.columnNames.map((val, i) => {
                        return <div><Chip
                            label={val}

                            onDelete={() => {

                                var newColumnNames = this.state.columnNames.slice();

                                newColumnNames.splice(i, 1);

                                this.setState(
                                    {
                                        columnNames: newColumnNames
                                    }
                                )

                            }}

                        /></div>
                    })}


                    <TextField
                        id="name"
                        label="Column Name"
                        value={this.state.newField}
                        //  onChange={this.handleChange('name')}
                        margin="normal"
                        onChange={
                            (e) => {
                                this.setState({
                                    newField: e.target.value
                                })
                            }
                        }
                        style={styles.textField}
                    />
                    <Button mini onClick={() => {

                        if (this.state.newField.length > 0)

                            this.setState({
                                newField: "",
                                columnNames: [...this.state.columnNames, this.state.newField]
                            })
                    }} > Add column</Button>

                </Typography>
                {/* <SimpleModal /> */}

                <Button color="accent" style={styles.button} onClick={this.onAddTable.bind(this)} > Add Table</Button>
            </div>
        </Modal>
    }

}

export default AddTable;