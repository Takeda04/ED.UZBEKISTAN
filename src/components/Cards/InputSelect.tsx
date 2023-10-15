import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface IInputSelect {
  question: string; 
  options: { [key: string]: number | string };
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
  value?: string;
  isWrong?: boolean;
}

const InputSelect: React.FC<IInputSelect> = ({ question, options, onChange, value, isWrong }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: '22px', color: 'black' }}>{question}</FormLabel>
      <RadioGroup 
        aria-labelledby="demo-radio-buttons-group-label" 
        defaultValue="" 
        name="radio-buttons-group"
        value={value}
        onChange={onChange}
        style={{ color: isWrong ? 'red' : 'inherit' }}
      >
        {Object.keys(options).map((key) => (
          <FormControlLabel key={key} value={key} control={<Radio />} label={options[key]} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default InputSelect;
