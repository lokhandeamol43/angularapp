import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { WikiService } from '../Services/wiki.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  @Input()  searchTerm : any = '';
  searchResults: any[];
  searchName: any = '';
  showTableHeader: boolean = false;

  constructor(private wikiserve: WikiService,  private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  search() {
    this.wikiserve.search(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.query.search;
      console.log(this.searchResults);
      console.log('clicked on fetch data');
      this.showTableHeader = true;
    });
  }

  sanitizeAndExtractText(html: string): string {
    const sanitizedHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    const div = document.createElement('div');
    div.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, sanitizedHtml);
    return div.textContent || div.innerText || '';
  }
}