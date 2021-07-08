import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(
  initialFValues: any,
  validate: any,
  validateOnChange = false
) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState<any>({});
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };
  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };
  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
export function Form(props: any) {
  const classes = useStyles();

  return (
    <form onSubmit={props.onSubmit} className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
}
