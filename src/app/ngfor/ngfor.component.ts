import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  employeeRecords : any [] = [
    {eName:'Dnyanesh', eCity: 'pune', Salary: '150000' , imgUrl: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'},
    {eName:'Jack', eCity: 'USA', Salary: '1500000', imgUrl: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'},

   ]

   title : string = "Top 3 Movies";

   cinemas : Movie[] = [
    {title: 'Avatar', director: 'James Cameron', cast:'Sam Worthington', releaseDate: '2009'},
    {title: 'Avenger Endgame', director: 'Russo Brother', cast:'Robert Downy Jr', releaseDate: '2019'},
    {title: 'Tenet', director: 'Christopher Nolan', cast:'Robert Pattinson', releaseDate: '2020'}
   ]

  constructor() { }

  ngOnInit() {
  }

}
