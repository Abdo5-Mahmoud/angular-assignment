import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { companyDetails } from './app.component.model';
import { ContentBodyComponent } from "./content-body/content-body.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NgxPaginationModule, ContentBodyComponent, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-assignment';
  readonly headerTitleData:companyDetails={
    id:1,
    name:'اسم البروتوكول',
    country:'الدولة',
    currentCustomer:'العميل الحالي',
    suppliesNumber:'عدد الامتدادات',
    lastSheapDate:' تاريخ اخر شحنة',
    currentCash:'الرصيد الحالي',
    cashInUse:'الرصيد المستخدم للعميل الحالي',
    totalCashUsed:'الرصيد المستخدك للرقم ككل'
}

readonly headerDetailsData:companyDetails={
    id:1,
    name:'فودافون مصر',
    country:'المملكة الأردنية الهاشمية',
    currentCustomer:'الشركة الألمانية للإبادة الحشرات',
    suppliesNumber:'09',
    lastSheapDate:' 2024/12/29',
    currentCash:'ج.م5000',
    cashInUse:'ج.م5000',
    totalCashUsed:'ج.م5000'
  }




}
