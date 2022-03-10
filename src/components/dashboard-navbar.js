import styled from '@emotion/styled';
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import NextLink from 'next/link';
import { Logo } from './logo';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'unset',
  height: '91px',
  justifyContent: 'center',
  borderBottom: '1px solid #EBF0F5'
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            // lg: 280
          },
          width: {
            // lg: 'calc(100% - 280px)'
            lg: 'calc(100%)'
          },
          zIndex: {
            lg: 1300,
            md: 1100
          },
        }}
        >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Logo
            sx={{
              height: 42,
              width: 42
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              py: 1,
              mr: 4,
              border: '1px solid #EBF0F5',
              borderRadius: 1,
              display: 'flex',
            }}
          >
            <Avatar
              sx={{
                height: 26,
                width: 26,
                ml: 1
              }}
              src="/static/images/avatars/avatar_1.png"
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                color: '#1E272E',
                fontSize: 16,
                px: 1
              }}
            >
              Siddharth Jain
            </Box>
          </Box>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};
