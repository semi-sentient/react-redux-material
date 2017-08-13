import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

import Loading from 'app/components/loading/Loading';

/* istanbul ignore next */
class FormDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDialogOpen: false,
            isLoading: false,

            // form field values
            dob: null,
            firstName: '',
            lastName: '',
            gender: '',

            // form field errors
            dobError: '',
            firstNameError: '',
            genderError: ''
        };
    }

    handleDialogOpen = () => {
        this.setState({
            isDialogOpen: true
        });
    };

    handleDialogClose = () => {
        this.setState({
            isDialogOpen: false,
            isLoading: false
        });
    };

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        });
    };

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };

    handleDobChange = (event, dob) => {
        this.setState({
            dob
        });
    };

    handleGenderChange = (event, index, gender) => {
        this.setState({
            gender
        });
    };

    handleReset = () => {
        this.setState({
            dob: null,
            firstName: '',
            lastName: '',
            gender: ''
        });
    };

    handleSubmit = () => {
        let isValid = true;
        
        if (!this.state.firstName.trim()) {
            isValid = false;
            this.setState({
                firstNameError: 'First name is required'
            });
        }

        if (!this.state.gender) {
            isValid = false;
            this.setState({
                genderError: 'Gender is required'
            });
        }

        if (!this.state.dob) {
            isValid = false;
            this.setState({
                dobError: 'Date of birth is required'
            });
        }

        if (isValid) {
            this.setState({
                isDialogOpen: true,
                isLoading: true
            });
        }
    };

    render() {
        const dialogActions = [
            <FlatButton
                label="Okay"
                primary
                onTouchTap={this.handleDialogClose}
            />
        ];

        return (
            <Card>
                <CardHeader
                    actAsExpander
                    showExpandableButton
                    title="Form Demo"
                    subtitle="Demonstrates a basic form with which disables upon submission"
                />
                <CardText expandable>
                    <div style={{
                        position: 'relative'
                    }}>
                        <Loading isLoading={this.state.isLoading} />
                    </div>
                    
                    <TextField
                        disabled={this.state.isLoading}
                        errorText={this.state.firstNameError}
                        hintText="Enter your first name"
                        floatingLabelText="First name *"
                        onChange={this.handleFirstNameChange}
                        value={this.state.firstName}
                    />
                    <br />
                    <TextField
                        disabled={this.state.isLoading}
                        hintText="Enter your last name"
                        floatingLabelText="Last name"
                        onChange={this.handleLastNameChange}
                        value={this.state.lastName}
                    />
                    <br />
                    <SelectField
                        disabled={this.state.isLoading}
                        errorText={this.state.genderError}
                        floatingLabelText="Gender *"
                        onChange={this.handleGenderChange}
                        value={this.state.gender}
                    >
                        <MenuItem value="F" primaryText="Female" />
                        <MenuItem value="M" primaryText="Male" />
                    </SelectField>
                    <br />
                    <DatePicker
                        container="inline"
                        disabled={this.state.isLoading}
                        errorText={this.state.dobError}
                        floatingLabelText="Date of birth *"
                        onChange={this.handleDobChange}
                        value={this.state.dob}
                    />
                    <br />
                    * Required fields

                    <div className="button-group">
                        <RaisedButton
                            disabled={this.state.isLoading}
                            label="Search"
                            onClick={this.handleSubmit}
                            primary
                        />
                        {' '}
                        <FlatButton
                            disabled={this.state.isLoading}
                            label="Reset"
                            secondary
                        />
                    </div>

                    <Dialog
                        actions={dialogActions}
                        open={this.state.isDialogOpen}
                        title="A Dialog"
                    >
                        Your input has been accepted!
                    </Dialog>
                </CardText>
            </Card>
        );
    }
}

export default FormDemo;