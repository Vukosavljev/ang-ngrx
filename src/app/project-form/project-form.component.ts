import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validator";

@Component({
  selector: "app-project-form",
  templateUrl: "./project-form.component.html",
  styleUrls: ["./project-form.component.scss"]
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectName: [
        null,
        [Validators.required, CustomValidators.invalidProjectName.bind(this)],
        CustomValidators.asyncProjectName.bind(this)
      ],
      mail: [null, [Validators.required]],
      projectStatus: [null]
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
