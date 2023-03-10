import { useState } from 'react';

import { Box, TextField, MenuItem } from '@mui/material';

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Box width='250px'>
      <TextField
        label='Select country'
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size='small'
        color='secondary'
        helperText='Please select your country'
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
        <MenuItem value='RU'>Russia</MenuItem>
        <MenuItem value='DE'>Germany</MenuItem>
      </TextField>
    </Box>
  );
};
