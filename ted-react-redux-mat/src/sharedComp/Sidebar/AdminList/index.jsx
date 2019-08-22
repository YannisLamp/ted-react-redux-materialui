import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText, Divider,
    ListSubheader, Typography } from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  MessageOutlined as MessageIcon,
  LibraryAddOutlined as LibraryAddOutlinedIcon
} from '@material-ui/icons';

// For importing my custom styles  
import useStyles from '../styles';


export default function UserList(props) {
    const classes = useStyles();

    return (
        <List
            component="div"
            disablePadding
        >
            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                exact
                to="/"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Home"
                />
            </ListItem>
            
            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/auctions"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Browse Auctions"
                />
            </ListItem>


            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/create_auctions"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <LibraryAddOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Create Auction"
                />
            </ListItem>

            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/messages"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <MessageIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Messages"
                />
            </ListItem>

            <Divider className={classes.listDivider} />

            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/admin"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Verify Users"
                />
            </ListItem>

            <Divider className={classes.listDivider} />

            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/profile"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Profile"
                />
            </ListItem>

            <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/login"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <LockOpenIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Log Out"
                />
            </ListItem>
            
            
            
            
        </List>
    );
}



            /* <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/icons"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Icons and Images"
                />
            </ListItem> */




            /* <ListItem
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={NavLink}
                to="/settings"
            >
                <ListItemIcon className={classes.listItemIcon}>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary="Settings"
                />
            </ListItem> */

            // <ListItem
            //     activeClassName={classes.activeListItem}
            //     className={classes.listItem}
            //     component={NavLink}
            //     to="/typography"
            // >
            //     <ListItemIcon className={classes.listItemIcon}>
            //         <TextFieldsIcon />
            //     </ListItemIcon>
            //     <ListItemText
            //         classes={{ primary: classes.listItemText }}
            //         primary="Typography"
            //     />
            // </ListItem>