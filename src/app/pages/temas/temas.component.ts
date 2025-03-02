import {Component, OnInit} from '@angular/core';
import {Temas} from '../../core/models/temas';
import {TemasService} from '../../services/temas.service';

@Component({
  selector: 'app-temas',
  standalone: false,

  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent implements OnInit{
  misTemas: Temas[] = [];

  constructor(private temasService: TemasService) {
  }

  ngOnInit(): void {
    this.temasService.getTemas().subscribe((temas:any) => {
      this.misTemas = temas;
    });
  }


  setSelection(tema: Temas) {
    Temas.selectedOnce = true;
    Temas.setSelected(tema);
    console.log('Selected Tema:', Temas.getSelected());
  }

  eliminarTema() {
    this.temasService.deleteTema(Temas.getSelected().id)
  }

  protected readonly Temas = Temas;
}
