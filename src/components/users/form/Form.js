import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Box } from '@material-ui/core';
import { saveUser } from '../../../store/actions/users'
import './form.scss'

function Form({ user, saveUser }) {
    
    const [formItem, setFormItem] = useState(user);
    const history = useHistory();
    
    function onCancelForm() {
        history.push('/users');
    }

    function onValueChange(e) {
        const changes = {
            [e.target.name]: e.target.value,
        };
        setFormItem({ ...formItem, ...changes });
    }

    function onSave() {
        saveUser(formItem);
        onCancelForm();
    }

    return (
        <Box className='center'>
            <form noValidate autoComplete='off'>
                <TextField
                    id='standard-basic'
                    label='Name'
                    name='name'
                    value={formItem.name}
                    onChange={onValueChange} 
                />
                <TextField 
                    id='standard-basic'
                    label='UserName'
                    name='username'
                    value={formItem.username}
                    onChange={onValueChange} 
                />
                <TextField 
                    id='standard-basic' 
                    label='Phone'
                    name='phone'
                    value={formItem.phone}
                    onChange={onValueChange} 
                />
            </form>

            <Button
                className='margin'
                variant='contained'
                color='primary'
                size='small'
                onClick={(e) => e.stopPropagation() || onSave()}
            >
                Save
            </Button>
            
            <Button
                className='margin'
                variant='contained'
                color='primary'
                size='small'
                onClick={onCancelForm}
            >
                Cancel
            </Button>
        </Box>
    );
}

const mapStateToProps = (state, props) => {
    const user =
        props.match.params.id === 'new'
            ? {
                name: '',
                username: '',
                phone: '',
            }
            : state.users.users.find(
                (user) => Number(user.id) === Number(props.match.params.id)
            );
    return {
        user,
    };
};

const mapDispatchToprops = {
    saveUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Form));