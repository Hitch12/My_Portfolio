import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  constructor(){}



  ngOnInit(): void {
    function textEffect(){
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        name.innerText = name.innerText
          .split("")
          .map((letter:any, index:any) => {
            if(index < iteration) {
              return name.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");

        if(iteration >= name.dataset.value.length){
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 40);
    }
    setTimeout(()=>{
      textEffect()
    },4000)



    // window.addEventListener('DOMContentLoaded', textEffect)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnipqrstuvwxyz";

    let interval:any = null;

    const screen:any = document.querySelector(".title"),
          name:any = document.querySelector(".title");

    screen.onmouseenter = (event:any) => {

      textEffect()
    }


        // pipe
        setTimeout(()=>{
          setInterval(()=>{
            if(document.querySelector('.pipe')?.classList.contains('d-none'))
              document.querySelector('.pipe')?.classList.replace('d-none','d-inline');
            else if(document.querySelector('.pipe')?.classList.contains('d-inline'))
            document.querySelector('.pipe')?.classList.replace('d-inline','d-none');
          },500)
        },6100)

  }
}
