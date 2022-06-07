import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  oderStatus: any;
  data: Observable<any> = new Observable;
  ngOnInit(): void {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next("In Progress")
      }, 1000)

      setTimeout(() => {
        observer.next("Processing")
      }, 3000)

      setTimeout(() => {
        observer.next("Complete")
      }, 6000)

      setTimeout(() => {
        observer.error('find an error');
      }, 8000)
      // how to complete the observable
      setTimeout(() => {
        observer.complete();
      }, 10000)
    })
    this.data.subscribe(val => {
      this.oderStatus = val; //first subscription
    });
    this.data.subscribe(val2 => {
      console.log('second subscription ')//second subscription
    });
  }

}
