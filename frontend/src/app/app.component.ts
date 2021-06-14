import { Component, OnInit } from '@angular/core';
import { CompanyService } from './app.service';
import { Company } from './Company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CompanyService]
})

export class AppComponent {
  title = 'frontend';
  
  
  
  candidate = 'Cléver Guimarães Cardoso Filho';
  companies: Company[];
  searchValue: string;
  
  
  constructor(private compSvc: CompanyService){}
  ngOnInit() {
        
  }
  listComp(){
    this.compSvc.getall().subscribe((res:Company[]) =>{
       this.companies= res})
    
  }
  

  
}


