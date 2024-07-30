import {FormGroup} from '@angular/forms'

export const inputValidations = (form: FormGroup, type: string): boolean => {
    return (
      (form.get(type)?.touched || form.get(type)?.dirty) &&
      form.get(type).errors !== null &&
      form.get(type).errors['required']
    );
  };