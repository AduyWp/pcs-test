import "../styles/globals.css";
import Layout from "../src/app/Theme/layout";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    height: 'unset',
    maxWidth: '420px',
    width: '100%',
    display: 'grid !important',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    '& .MuiBottomNavigationAction-root': {
      color: '#A3A3A3',
    },
    '& .MuiBottomNavigationAction-label.MuiBottomNavigationAction-iconOnly': {
      opacity: '1 !important',
      fontWeight: 'bold',
      fontSize: '13px',
    },
    '& .Mui-selected': {
      color: '#F82F19',
      fontWeight: 'bold',
      fontSize: '13px',
      marginTop: '4px',
    },
  },
  textRed: {
    color: '#F82F19',
  },
  centerContainer: {
    padding: '6px 12px 8px',
  },
  buttonCenter: {
    background: '#F82F19',
    color: '#fff',
    position: 'absolute',
    top: '-35px',
    padding: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    '&:hover': {
      backgroundColor: '#cb2210',
    },
  },
  textAbsolute: {
    position: 'absolute',
    bottom: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
  },
  padding: {
    padding: '0 1rem',
  },
});

export default function MyApp({ Component, pageProps }) {
  const styles = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(router.route)

  return (
    <Layout>
      <Component {...pageProps} />
      { router.route !== '/notification' ?
        <BottomNavigation value={value} onChange={handleChange} className={classNames(styles.root)}>
          <BottomNavigationAction  label="Home" value="home" icon={<HomeIcon fontSize="large" />} />
          <BottomNavigationAction label="Attedance" value="attedance" icon={<EventAvailableIcon fontSize="large" />} />
          <div className={classNames(styles.centerContainer, "relative")}>
            <div>
              <IconButton aria-label="exit" className={styles.buttonCenter}>
                <ExitToAppIcon fontSize="large" />
              </IconButton>
              <p className={classNames(styles.textRed, styles.textAbsolute, "text-center text-sm font-bold")}>Check out</p>
            </div>
          </div>
          <BottomNavigationAction label="Form" value="form" icon={<AssignmentIcon fontSize="large" />} />
          <BottomNavigationAction label="Setting" value="setting" icon={<SettingsIcon fontSize="large" />} />
        </BottomNavigation>
      : null }
    </Layout>
  );
}