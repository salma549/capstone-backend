import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {Box, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery, useTheme} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const menu=[
    {name:"Dashboard", path:"/admin", icon:<DashboardIcon/>},
    {name:"Products", path:"/admin/products", icon:<CategoryIcon/>},
    {name:"Customers", path:"/admin/customers", icon:<PeopleIcon/>},
    {name:"Orders", path:"/admin/orders", icon:<BookmarkBorderIcon/>},
    {name:"AddProduct", path:"/admin/product/create", icon:<ProductionQuantityLimitsIcon/>},
    // {name:"", path:" "},
]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible]=useState(false);
    const navigate = useNavigate();

    const drawer=(
        <Box
            sx={{
                overflow:"auto",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
            }}
            >

                {isLargeScreen && <Toolbar/>}
                <List>
                    {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                             {item.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>)}
                </List>

                <List>
                  <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                           <AccountCircleIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>

        </Box>
    )

  return (
    <div>
       Admin
    </div>
  )
}

export default Admin
