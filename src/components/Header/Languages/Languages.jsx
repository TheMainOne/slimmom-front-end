import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { StyledSelect, StyledForm } from './Languages.styled';

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
    <div>
      <StyledForm
        size="small"
        sx={{
          ml: 3,
          p: 0,
          top: 6,
        }}
      >
        {!language && (
          <InputLabel id="demo-simple-select-label">
            <LanguageIcon />
          </InputLabel>
        )}
        <StyledSelect
          sx={{
            ml: 3,
            p: 0,
            top: 5,
          }}
          IconComponent={false}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem onClick={changeLanguage('en')} value={'en'}>
            🇺🇸
          </MenuItem>
          <MenuItem onClick={changeLanguage('ua')} value={'ua'}>
            🇺🇦
          </MenuItem>
        </StyledSelect>
      </StyledForm>
    </div>
  );
};
