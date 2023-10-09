import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  ngOnInit(): void {

    setInterval(()=>{
      if(document.querySelector('.pipe2')?.classList.contains('d-none'))
        document.querySelector('.pipe2')?.classList.replace('d-none','d-inline');
      else if(document.querySelector('.pipe2')?.classList.contains('d-inline'))
      document.querySelector('.pipe2')?.classList.replace('d-inline','d-none');
    },500)
  }
}
