import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { getUsers, deleteUser } from '../../store/actions/users';
import Form from './form/Form';
import UserList from './UserList';

function UsersPage ({ getUsers, users, deleteUser }) {
    
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const { path } = useRouteMatch();
    
    return (
        <Switch>
            <Route path={path + '/'} exact>
                <UserList users={users} deleteUser={deleteUser}/>
            </Route>
            <Route path={path + '/:id'}>
                <Form />
            </Route>
        </Switch>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users.users,
    };
};

const mapDispatchToprops = {
    getUsers,
    deleteUser,
};

export default connect(mapStateToProps, mapDispatchToprops)(UsersPage);