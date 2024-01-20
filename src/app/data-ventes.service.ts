import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';



@Injectable({
  providedIn: 'root'
})
export class DataVentesService {

  constructor() { }
  getDataSource(){
    return new DataSource({
      store: 

      

    })
  }
}
