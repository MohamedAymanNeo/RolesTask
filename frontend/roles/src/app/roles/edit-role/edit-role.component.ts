import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interface/role';
import { RolesService } from 'src/app/services/roles.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  checkedRole;
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
  roleForm: Role;


  constructor(private roleServ: RolesService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
    console.log(this.roleForm);
    // debugger;
    this.checkedRole = this.roleServ.roleData;
    if (!this.checkedRole) {
      this.route.navigate(['/']);
      this.toastr.error('Please Choose Role First', '-_-');
    } else {
      this.roleForm = {
        name: this.checkedRole.name,
        program: this.checkedRole.program,
        subProgram: this.checkedRole.subProgram,
        pages: this.checkedRole.pages,
        permissions: this.checkedRole.permissions,
      }
      this.permissions = this.permissions.filter((filterdData) => {
        // console.log(filterdData);
        return !this.roleForm.permissions.includes(filterdData);
      })
      this.allowedPermissions = this.roleForm.permissions;

      console.log(this.roleForm.name);
    }

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
    // console.log(event.container.data);
    // return event.container.data;
    // this.allowedPermissions = event.container.data;
    // console.log(this.allowedPermissions);
  }
  updateRole() {
    this.roleServ.updateRole(this.roleForm, this.checkedRole._id).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/']);
      this.toastr.success("Roles Updated Successfully", "^_^")
    },
    (err) => {
      console.log(err);
    }
    );
  }
}
