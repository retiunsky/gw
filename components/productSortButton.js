import { useState } from 'react';
import { ButtonGroup, Menu, Button, MenuItem, Typography } from '@mui/material';
import { useSortContext } from '../contexts/SortContext';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { useTheme } from 'next-themes';

const SORT_BY_OPTIONS = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Price: High-Low', label: 'Price: High-Low' },
  { value: 'Price: Low-High', label: 'Price: Low-High' },
];

export default function ProductSortButton({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  textColor,
  fontTextShadow,
}) {
  const { resolvedTheme } = useTheme();

  const [openSort, setOpenSort] = useState(null);
  const { sortBy, setSort } = useSortContext();

  const handleOpen = (event) => {
    setOpenSort(event.currentTarget);
  };

  const handleClose = (event) => {
    const { myValue } = event.currentTarget.dataset;
    setSort(myValue);
    setOpenSort(null);
  };

  const onClose = (event) => {
    setOpenSort(null);
  };

  let bgMUIPaperColor =
  resolvedTheme === 'light' ? 'rgb(243 244 246)' 
  : 'rgb(31 41 55)'

  return (
    <>
      <ButtonGroup>
        <Button
          sx={{
            pointerEvents: 'all',
            cursor: 'pointer',
            fontSize: '18px',
            color: `${textColor}`,
            textShadow: fontTextShadow,
            backdropFilter: 'blur(15px)',

            '&:hover': {
              background: 'transparent',
            },
          }}
          variant='contained'
          disableRipple
          onClick={open ? handleDrawerClose : handleDrawerOpen}
        >
          Filters&nbsp;
        </Button>

        <Button
          sx={{
            pointerEvents: 'all',
            cursor: 'pointer',
            fontSize: '16px',
            color: `${textColor}`,
            textShadow: fontTextShadow,
            backdropFilter: 'blur(15px)',
            '&:hover': {
              background: 'transparent',
            },
          }}
          variant='contained'
          disableRipple
          onClick={handleOpen}
          endIcon={
            <ExpandMoreTwoToneIcon
              style={{
                filter: `drop-shadow(${fontTextShadow})`,
              }}
              fontSize='small'
            />
          }
        >
          Sort by:&nbsp;
          <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
            {sortBy}
          </Typography>
        </Button>
      </ButtonGroup>
      <Menu
        keepMounted
        anchorEl={openSort}
        open={Boolean(openSort)}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          zIndex: 10,
          '& .MuiMenu-paper': { 
            color: `${textColor}`,
            backgroundColor: bgMUIPaperColor },
        }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
          style={{ background: 'transparent',
           color: resolvedTheme === 'light' 
           ? '#6CF9F8' 
           :  '#F739C0'
          }}

            data-my-value={option.value}
            key={option.value}
            onClick={handleClose}
            sx={{
              typography: 'body2',
              
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
