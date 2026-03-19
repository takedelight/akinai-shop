import { TextInput, TextInputProps } from '@mantine/core';

export const InputWithButton = ({
  size = 'md',
  radius = 'xl',
  className = '',
  ...props
}: TextInputProps) => {
  return (
    <TextInput
      radius={radius}
      size={size}
      rightSectionWidth={42}
      className={className}
      {...props}
    />
  );
};
