import { Component, OnInit } from '@angular/core';
import { GifService } from '../Services/gif.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
})
export class GifListComponent implements OnInit {
  gifs: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  searchTerm=''; // Add searchTerm variable
  searchResults: any[];


  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    console.log('Loading page:', page);
    this.gifService
      .getTrendingGifs((page - 1) * 10, 10, this.searchTerm) // Pass searchTerm
      .subscribe((data: any) => {
        this.gifs = data.data;
        this.totalPages = Math.ceil(data.pagination.total_count / 10);
        this.currentPage = page;
      });
  }

  search() {
    this.gifService.searchGifs(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.data;
      console.log(this.searchResults);
      // Add any other logic to update the UI or display the search results
    });
  }

  
}