import { CastomTextField } from './Input.styled';

export const Input = ({
  variant = 'standard',
  name = '',
  type = 'text',
  label = '',
  value = '',
  onChange = () => {},
  error = false,
  helperText = '',
  autoComplete = '',
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
