import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My_Portfolio';
  isLoading:boolean = true;
  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoading = false;
    },0)  // it was 4300

  }

}
