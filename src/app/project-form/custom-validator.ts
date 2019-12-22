import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === "te") {
      return { invalidName: true };
    }
    return null;
  }

  static asyncProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (control.value === "as") {
          res({ invalidName: true });
        }
        res(null);
      }, 2000);
    });
  }
}
