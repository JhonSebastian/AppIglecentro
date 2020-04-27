import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface anuncio{
  id: string
  fecha:string
  hora: string
  lugar: string
  descripcion: string
  img: string
  titulo: string
  video: string
}

export interface devocional{
  id: string
  fecha:string
  hora: string
  lugar: string
  descripcion: string
  img: string
  categoria: string
  audio: string
  link: string
  titulo:string
}

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private db : AngularFirestore) { }

  getAnuncios(){
    return this.db.collection('anuncios').snapshotChanges().pipe(map(anuncios =>{
      return anuncios.map(a =>{
        const data = a.payload.doc.data() as anuncio;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getDevocional(){
    return this.db.collection('devocionales').snapshotChanges().pipe(map(devocionales =>{
      return devocionales.map(a =>{
        const data = a.payload.doc.data() as devocional;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }


}
