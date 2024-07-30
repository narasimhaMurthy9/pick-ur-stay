import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  userEmail: string;
  dropdown = false
  mangerRole:string
  showNotificationIcon:boolean=false
  currentBellIcon: string = "fa fa-bell-o text-3xl";
  username: any;
  firstLetter: string;

  constructor(private router:Router,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.getFirstLetterOfUsername();
  }
  logoutUser(){
    localStorage.clear()
    this.router.navigate(['/auth/signIn'])
  }

  getFirstLetterOfUsername() {
    this.username =  localStorage.getItem('username') ;
    this.firstLetter = this.username.charAt(0).toUpperCase();
     
  }


  dropdownIconToggle(){
    this.dropdown = !this.dropdown;
    
  }

  toNotificationsPage(){
    this.router.navigate(['dashboard/notifications'])
   
  }

  login(){
    this.toaster.info("Admin will contact you soon")
  }

}
