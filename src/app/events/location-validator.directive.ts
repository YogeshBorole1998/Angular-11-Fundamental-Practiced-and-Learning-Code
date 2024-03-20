import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateLocationDirective,
      multi: true,
    },
  ],
})
export class ValidateLocationDirective implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } | null {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const imageUrlControl = (formGroup.root as FormGroup).controls['imageUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (imageUrlControl && imageUrlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
