import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Role } from './../../interface/role';
import { NgForm } from '@angular/forms';
import { RolesService } from './../../services/roles.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  program = [
    'Program1',
    'Program2',
    'Program3',
  ];
  subProgram = [
    'subProgram1',
    'subProgram2',
    'subProgram3',
  ];
  pages = [
    'Page1',
    'Page2',
    'Page3',
  ];
  permissions = [
    'Permission1',
    'Permission2',
    'Permission3',
    'Permission4',
    'Permission5',
  ];

  allowedPermissions = [];
  transformedData = [];
  roleForm: Role = {
    name: null,
    program: 'Program1',
    subProgram: 'subProgram1',
    pages: 'Page1',
    permissions: this.permissions,
    selected: false
  };


  constructor(private roleServ: RolesService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      console.log(event.container);
      moveItemInArray(event.container.data, event.previousIndex , event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  onAddRole(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value)

    let data = {...form.value, permissions: this.allowedPermissions}
    // console.log(data)
    this.roleServ.addRole(data)
    .subscribe(
      (data) => {console.log(data, this.allowedPermissions)},
      (err) => console.log(err)
    );
    form.resetForm();

    setTimeout(() => {
      this.toastr.success('Role Added Successfully!', '^_^');
      this.route.navigate(['/']);
    }, 1000)
  }


}
