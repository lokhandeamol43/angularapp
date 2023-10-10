import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  @Input() fromParent: string;
  @ContentChild("child", {static: true}) contentChild: ElementRef;
  @ViewChild("childhook", {static: false}) viewChild: ElementRef;

  counter;
  num: number = 1;
  
  subscrption: Subscription;

  constructor(private postService: PostService) { 
    console.log('constructor called')
  }

  ngOnDestroy(): void {

    console.log('ngOnDestroy called');
     clearInterval(this.counter);
     this.subscrption.unsubscribe();
   }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    this.viewChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);
  }
  ngAfterViewInit(): void {
   
    console.log('ngAfterViewInit called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);
  }


  ngAfterContentChecked(): void {
    
    console.log('ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);

  }

  ngAfterContentInit(): void {
  
    console.log('ngAfterContentInit called', this.contentChild);

    //this.contentChild.nativeElement.setAttribute('style', 'color:green');

    this.contentChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(this.fromParent);

    for(const propName in changes) 
    {
      const prop = changes[propName];
      const { previousValue, currentValue, firstChange} = prop;
      console.log(`Prop name ${propName}`);
      console.log(`Prev Value ${previousValue}`);
      console.log(`Current Value ${currentValue}`);
      console.log(`First change ${firstChange}`);

      console.log('--------------------');

    }
  
  }
  ngOnInit() {
    console.log('ngOnInit called', this.contentChild);
    
    console.log('ngOnInit called');
    this.subscrption = this.postService.getPosts().subscribe(res => {
      console.log('from hook compo posts data', res);
    })

    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000)

  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
    // api 
  }
 
 

}
