import React from 'react';
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory, useRouteMatch } from 'react-router-dom';
import '../userPage.scss';

export default function User({ user, onDelete }) {
    const history = useHistory();
    const { url } = useRouteMatch();

    function onUserClick() {
        history.push(url + '/' + user.id);
    }

    return (
        <TableRow onClick={onUserClick} className='cursor-style'>
            <TableCell component='th' scope='row'>
                {user.name}
            </TableCell>
            <TableCell align='right'>{user.username}</TableCell>
            <TableCell align='right'>{user.phone}</TableCell>
            <TableCell align="right">
                <IconButton
                    aria-label="delete"
                    onClick={(e) => e.stopPropagation() || onDelete(user.id)}
                    >
                        <DeleteIcon fontSize="default" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}