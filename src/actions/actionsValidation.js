import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_ERROR
} from "../types";

export function validateFormAction() {
  return dispatch => {
    dispatch(startValidation());
  };
}

export const startValidation = () => {
  return {
    type: VALIDATE_FORM
  };
};

export const validationSuccess = () => {
  return {
    type: VALIDATE_FORM_SUCCESS
  };
};

export const validationError = () => {
  return {
    type: VALIDATE_FORM_ERROR
  };
};
