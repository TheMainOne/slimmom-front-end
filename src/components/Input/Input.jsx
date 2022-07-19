import { CastomTextField } from './Input.styled';

export const Input = ({
  variant = 'standard',
  name = '',
  type = 'text',
  label = '',
  value = '',
  onChange = () => {},
  error = '',
  helperText = '',
  autoComplete = false,
}) => {
  return (
    <CastomTextField
      variant={variant}
      id={name}
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete={autoComplete}
    />
  );
};
