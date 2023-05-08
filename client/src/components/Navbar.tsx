import { AppBar, Toolbar, Typography, useTheme, Tabs, Tab } from '@mui/material'
import React from 'react'
import { matchPath, useLocation, Link } from 'react-router-dom';

type Props = {}

export default function Navbar({}: Props) {
  const theme = useTheme()
  
  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }
  
  function CustomTabs() {
    const routeMatch = useRouteMatch(["/", "/search", "/categories", "/recipes"])
    let currentTab = routeMatch?.pattern.path
    if (!currentTab) {currentTab = "/"}
    
    return (
      <Tabs value={currentTab} textColor="secondary" indicatorColor="secondary">
        <Tab label="Home" value="/" to="/" component={Link} sx={{color: theme.palette.common.black}}/>
        <Tab label="Search" value="/search" to="/search" component={Link} sx={{color: theme.palette.common.black}}/>
        <Tab label="Categories" value="/categories" to="/categories" component={Link} sx={{color: theme.palette.common.black}}/>
        <Tab label="Recipes" value="/recipes" to="/recipes" component={Link} sx={{color: theme.palette.common.black}}/>
      </Tabs>
    )
  }
  
  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="text.primary" noWrap sx={{ flexGrow: 1 }}>
            Recipe site
          </Typography>
          <CustomTabs/>
        </Toolbar>
      </AppBar>
    </>
  )
}
