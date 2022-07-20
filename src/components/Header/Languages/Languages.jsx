import LanguageIcon from '@mui/icons-material/Language';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { StyledSelect, StyledForm } from './Languages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { setCurrentLang, selectActiveLang } from 'redux/slices';
import { useEffect } from 'react';

export const Languages = () => {
  const { i18n } = useTranslation();
  const isLogged = useSelector(getIsLoggedIn);
  const language = useSelector(selectActiveLang);
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(setCurrentLang(event.target.value));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div>
      <StyledForm
        size="small"
        sx={{
          ml: 3,
          p: 0,
          top: 6,
        }}
        islogged={isLogged ? isLogged.toString() : undefined}
      >
        {!language && (
          <InputLabel id="demo-simple-select-label">
            <LanguageIcon />
          </InputLabel>
        )}
        <StyledSelect
          sx={{
            '.MuiSelect-icon': {
              color: 'white',
            },
            ml: 3,
            p: 0,
            top: 5,
          }}
          IconComponent=""
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value={'en'}>🇺🇸</MenuItem>
          <MenuItem value={'ua'}>🇺🇦</MenuItem>
        </StyledSelect>
      </StyledForm>
    </div>
  );
};
