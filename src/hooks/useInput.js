import { useState, useCallback, useRef } from 'react';

export const useInput = options => {
  const { initialValue, minLength = 0, type = 'string' } = options || {};
  const [value, setValue] = useState(initialValue || '');
  const isValid = useRef(false);

  const handleString = useCallback(
    receivedValue => {
      isValid.current = receivedValue.length >= minLength;
      setValue(receivedValue);
    },
    [minLength]
  );

  const handleEmail = useCallback(receivedValue => {
    isValid.current = receivedValue && receivedValue.includes('@');
    setValue(receivedValue);
  }, []);

  const onChangeInput = useCallback(
    e => {
      const targetValue = e.target.value || '';
      if (type === 'email') {
        handleEmail(targetValue);
      } else {
        handleString(targetValue);
      }
    },
    [type, handleEmail, handleString]
  );

  return [value, onChangeInput, isValid.current, setValue];
};
