import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { studentModel } from '../../../model/student.model';
import { StudentService } from '../../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './student-list.html',
   styleUrl: './student-list.css',
})
export class StudentList implements OnInit{
    students: studentModel[]=[];
  constructor(
    private studentServie:StudentService,
    private cdr:ChangeDetectorRef

  ){}
  ngOnInit(): void {
    this.loadAllStudent()
  }

  loadAllStudent(){
    this.studentServie.getAllStudent().subscribe(
      {
        next:(data)=>{
          this.students=data;
          this.cdr.markForCheck();
          console.log(this.students);
        },
        error:(err)=>{
          
          console.log(err);
        }
      }
    );
  }
  remove(id:string){
    this.studentServie.deleteStudent(id).subscribe(
      {
        next:()=>{
          this.loadAllStudent()
          console.log("success")
        },
        error:(err)=>{
          console.log(err)
        }      }
    )
  }
}
