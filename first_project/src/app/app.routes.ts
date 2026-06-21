import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { StudentList } from './component/student/student-list/student-list';


export const routes: Routes = [

    {path:'', component:Home},
    {path:'all_stu', component:StudentList}
];
