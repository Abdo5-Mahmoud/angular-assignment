import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { client } from '../app.component.model';

@Component({
  selector: 'app-content-body',
  imports: [NgClass , NgxPaginationModule],
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.scss'],
})
export class ContentBodyComponent  {

 clients:Array<client>=[
  {
    id:1,
    name:'العميل',
    startDate:'تاريخ التعيين',
    cancelDate:'تاريخ الغاء التعيين',
    responsible:'المسؤول عن التعيين',
    localMinutes:'الدقائق المحلية',
    globalMinutes:'الدقائق الدولية',
    coast:'المبلغ'
  },
  {
    id:2,
    name:'الشركة الألمانية للإبادة الحشرات',
    startDate:'2023/01/01',
    cancelDate:'2023/01/01',
    responsible:'محمد علي',
    localMinutes:'120',
    globalMinutes:'120',
    coast:'100'
  },
  {
    id:3,
    name:'الشركة الألمانية للإبادة الحشرات',
    startDate:'2023/01/01',
    cancelDate:'2023/01/01',
    responsible:'محمد علي',
    localMinutes:'120',
    globalMinutes:'120',
    coast:'100'
  }
  ,{
    id:4,
    name:'الشركة الألمانية للإبادة الحشرات',
    startDate:'2023/01/01',
    cancelDate:'2023/01/01',
    responsible:'محمد علي',
    localMinutes:'120',
    globalMinutes:'120',
    coast:'100'
  },
  {
    id:5,
    name:'الشركة الألمانية للإبادة الحشرات',
    startDate:'2023/01/01',
    cancelDate:'2023/01/01',
    responsible:'محمد علي',
    localMinutes:'120',
    globalMinutes:'120',
    coast:'100'
  },
  {
    id:6,
    name:'الشركة الألمانية للإبادة الحشرات',
    startDate:'2023/01/01',
    cancelDate:'2023/01/01',
    responsible:'محمد علي',
    localMinutes:'120',
    globalMinutes:'120',
    coast:'100'
  },{
    id:7,
    name:'الشركة الألمانية للإبادة الحشرات',
    startDate:'2023/01/01',
    cancelDate:'2023/01/01',
    responsible:'محمد علي',
    localMinutes:'120',
    globalMinutes:'120',
    coast:'100'
  }
]
  page: number = 1;
  pageSize: number = 5;
  pageSizeOptions = [5, 10, 20];
  totalPages: number = this.getNumberOfPages();

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  changePageSize(value: number): void {
    this.pageSize = value;
    this.page = 1; // Reset to the first page
    this.totalPages = this.getNumberOfPages(); // Recalculate total pages
    console.log('Page size changed to:', this.pageSize);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      console.log('Navigated to page:', this.page);
    }
  }

  getPaginationData(): any[] {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.clients.slice(startIndex, endIndex);
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getNumberOfPages(): number {
    return Math.ceil(this.clients.length / this.pageSize);
  }
}
