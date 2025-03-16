import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  isEnum(key: string) : boolean {
    if (key === 'enumfield'){
      this.enumOptions = this.getEnum();
      return true
    }
    return false;
  }

  getEnum(): { key: string; value: any }[] {
    const enumObj = this.iterable['enumclass'];
    const map = Object.keys(enumObj)
      .filter(key => isNaN(Number(key))) // Filtrar las claves que no son números
      .map(key => ({ key, value: enumObj[key] }))
    return map;
  }
  getItems() {
    const retorno : Record<string, any>= {};
    for (let key in this.iterable) {
      if(key !== 'enumclass'){
        retorno[key] = this.iterable[key];
      }
    }
    return retorno;
  }

}
