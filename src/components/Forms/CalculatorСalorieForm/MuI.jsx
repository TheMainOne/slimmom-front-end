import { styled } from '@mui/material/styles';
import { Radio, FormLabel, FormControlLabel } from '@mui/material';

const RadioInput = styled(Radio)({
  color: '#E0E0E0',
  '&.Mui-checked': {
    color: ' #fc842d',
  },
});

const RadioLabel = styled(FormLabel)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 8.5px;
  color: #9b9faa;

  @media screen and (min-width: 768px) {
    padding-bottom: 11px;
    border-bottom: 1px solid #e0e0e0;
    display: block;
  }
`;

const ControlLabel = styled(FormControlLabel)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export { RadioInput, RadioLabel, ControlLabel };
