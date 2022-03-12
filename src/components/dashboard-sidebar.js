import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { DashboardIcon } from '../icons/dashboard-logo';
import { FileIcon } from '../icons/file-logo';
import { BatchIcon } from '../icons/batch';
import { Logo } from './logo';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/dashboard',
    icon: (<DashboardIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/',
    icon: (<BatchIcon fontSize="small" />),
    title: 'Skill Test'
  },
  {
    href: '/iternships',
    icon: (<FileIcon fontSize="small" />),
    title: 'Internships'
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  useEffect(() => {
      if (open) {
        onClose();
      }
    },[router.asPath]);

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box
            sx={{
              height: '90px',
              px: 6,
              display: 'flex',
              alignItems: 'center',
            }}>

              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
            </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#EBF0F5',
            mb: 4
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#fff',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
