import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../core/models/user';

@Component({
  selector: 'app-reuseform',
  standalone: false,

  templateUrl: './reuseform.component.html',
  styleUrl: './reuseform.component.css'
})
export class ReuseformComponent implements OnInit {
  @Input() iterable: Record<string, any> = {};
  @Output() salida = new EventEmitter<Record<string, any>>();
  form: FormGroup;
  enumOptions: { key: string; value: any }[] = [];
  constructor(builder: FormBuilder) {
    this.form = builder.group({});
  }

  ngOnInit(): void {
    Object.keys(this.getItems()).forEach(key => {
      if (!this.form.contains(key)) {
        this.form.addControl(key, new FormControl(this.iterable[key], Validators.required));
      }
    })

  }
  return() {
    this.salida.emit(this.form.value);
  }

  getItems() {
    const retorno : Record<string, any>= {};
    for (let key in this.iterable) {
        retorno[key] = this.iterable[key];
    }
    return retorno;
  }

}
