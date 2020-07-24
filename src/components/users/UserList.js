import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Box
} from '@material-ui/core';
import User from './user/User';
import { useRouteMatch, NavLink } from 'react-router-dom';
import './userPage.scss'

export default function UserList({ users, deleteUser }) {

    const { url } = useRouteMatch();

    return (
        <>
            { users.length > 0 ?
            <TableContainer>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>Username</TableCell>
                            <TableCell align='right'>Phone</TableCell>
                            <TableCell align='right'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { 
                            users.map((user) => (
                                <User user={user} key={user.id} onDelete={deleteUser} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            : 'load users ...'
            }

            <Box className='mt'>
                <Button variant='contained' component={NavLink} to={url + '/new'}>Add new user</Button>
            </Box>
        </>
    );
};