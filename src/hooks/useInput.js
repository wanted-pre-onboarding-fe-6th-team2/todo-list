import { useState, useCallback, useRef } from 'react';

export const useInput = options => {
  const { initialValue, minLength = 0, include = '' } = options || {};
  const [value, setValue] = useState(initialValue || '');
  const isValid = useRef(false);

  const handleString = useCallback(
    receivedValue => {
      if (include) {
        isValid.current = receivedValue && receivedValue.includes(include);
      }
      isValid.current = receivedValue.length >= minLength;
      setValue(receivedValue);
    },
    [minLength, include]
  );

  const onChangeInput = useCallback(
    e => {
      const targetValue = e.target.value || '';
      handleString(targetValue);
    },
    [type, handleEmail, handleString]
  );

  return [value, onChangeInput, isValid.current, setValue];
};
