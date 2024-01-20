import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

type TFormValues = {
  [key: string]: string;
};

type TFormFunctions = {
  values: TFormValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  setValues: Dispatch<SetStateAction<TFormValues>>;
};

export function useForm(initialValues: TFormValues): TFormFunctions {
  const [values, setValues] = useState<TFormValues>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm, setValues };
}
