import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
    url: 
    'https://www.vero.com.br/wp-content/uploads/2017/05/coriolano.png', 
    description: 'Barbearia'
  },
  {
    url:
    'https://radioriodejaneiro.digital/wp-content/uploads/2019/12/barbeiro.jpg',
     description: 'Homem'
  },
  {
    url:
    'https://protectionforbeauty.volkdobrasil.com.br/blog/wp-content/uploads/2019/12/GettyImages-1158457201.jpg',
     description: 'Mulher'
  }

];

}
