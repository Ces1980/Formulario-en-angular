import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageI} from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private contactCollection: AngularFirestoreCollection <MessageI>;

  constructor(private afs: AngularFirestore) { 
      /* con el atributo de la clase se indica con que colección se va a trabajar, 
      los campos son traidos de la interface MessageI  */
    this.contactCollection = afs.collection<MessageI>('contacts');
  }

  saveMessage(newContact : MessageI): void{
    this.contactCollection.add(newContact);
  }
}
