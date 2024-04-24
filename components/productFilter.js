import {
  Checkbox,
  ListSubheader,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { useFilterContext } from '../contexts/FilterContext';
import { useTheme } from 'next-themes';

export default function ProductFilter({ products }) {
  const { brandsChange } = useFilterContext();
  const { resolvedTheme } = useTheme();

  let fontColor =
  resolvedTheme === 'light' ? 'rgb(31 41 55)' :'rgb(243 244 246)' ;

  return (
    <>
      <ListSubheader sx={{ marginTop: '200px',
         p: 0, ml: 1, color: fontColor }} 
      disableSticky>
        Brands:
      </ListSubheader>
      <FormGroup sx={{pointerEvents: 'all', ml: 4 }}>
        {products.data.brands.map((item) => (
          <FormControlLabel
            sx={{
              zIndex: 10000,
              pointerEvents: 'all',
              color: fontColor,
              '&:hover': {
                borderRadius: 1,
              },
            }}
            control={
              <Checkbox
                sx={{
              pointerEvents: 'all',

                  color: fontColor,
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }}
              />
            }
            label={item.title}
            id={item.id}
            key={item.id}
            value={item.title}
            onChange={brandsChange}
          />
        ))}
      </FormGroup>
    </>
  );
}
