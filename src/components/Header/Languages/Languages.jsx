import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
// import { SelectS } from './Languages.styled';

export const Languages = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState('');

  const handleChange = event => {
    setLanguage(event.target.value);
  };
  const changeLanguage = ln => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <Box>
      <FormControl size="small" sx={{ m: 1, minWidth: 65 }}>
        <InputLabel id="demo-simple-select-label">
          <LanguageIcon />
        </InputLabel>
        <Select
          IconComponent={false}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
          variant="standard"
        >
          <MenuItem onClick={changeLanguage('en')} value={'en'}>
            🇺🇸
          </MenuItem>
          <MenuItem onClick={changeLanguage('ua')} value={'ua'}>
            🇺🇦
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
