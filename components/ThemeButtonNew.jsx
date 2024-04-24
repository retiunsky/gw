import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const MODE_BY_OPTIONS = [
  { value: 'system', label: 'system' },
  { value: 'light', label: 'light' },
  { value: 'dark', label: 'dark' },
];

export default function ThemeWithSystemButton(props) {
  const [mounted, setMounted] = useState(false);
  const [openTheme, setOpenTheme] = useState(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const handleOpen = (event) => {
    setOpenTheme(event.currentTarget);
  };
  const handleClose = (event) => {
    const { myValue } = event.currentTarget.dataset;
    setTheme(myValue);
    setOpenTheme(null);
  };
  const onClose = () => {
    setOpenTheme(null);
  };

  if (!mounted) return null;
  
  return (
    <>
      <Button
        disableRipple
        sx={{
          pointerEvents: 'all',
          cursor: 'pointer',
          fontSize: '18px',
          color: props.textColor,
          textShadow: props.fontTextShadow,
          paddingBottom: 1.5,
          paddingTop: 1.5,
          '&:hover': {
            border: '1px solid',
            background: 'transparent',
          },
        }}
        onClick={handleOpen}
      >
        {resolvedTheme === 'light' ? (
          <FontAwesomeIcon
            icon={faMoon}
            style={{
              fontSize: '18px',
              filter: `drop-shadow(${props.fontTextShadow})`,
            }}
          />
        ) : (
          <LightModeOutlinedIcon
            style={{
              fontSize: '20px',
              filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.7))',
            }}
          />
        )}
      </Button>

      <Menu
        sx={{
          ml: -1,
          zIndex: 10,
          '& .MuiMenu-paper': { 
            backdropFilter: 'blur(15px)',
            backgroundColor: 'transparent' },
        }}
        keepMounted
        anchorEl={openTheme}
        open={Boolean(openTheme)}
        onClose={onClose}
      >
        {MODE_BY_OPTIONS.map((option) => (
          <MenuItem
            style={{ background: 'transparent',
             color: 
             resolvedTheme === 'light' 
             ? '#6CF9F8' 
             :  '#F739C0'
            }}
            data-my-value={option.value}
            key={option.value}
            onClick={handleClose}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
