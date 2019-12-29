import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Role } from './../../interface/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  collection = [];
  roles: Role[] = [];
  filterdRoles: Role[] = [];
  selectedAll: any;
  p = 1;
  searchQuery = '';
  showUtilites= {};
  constructor(private roleServ: RolesService, private route: Router) {}

  ngOnInit() {
    this.loadRoles();
  }

  selectAll() {
    for (let i = 0; i < this.roles.length; i++) {
      this.roles[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.roles.every((item: any) => {
        return item.selected == true;
      });
  }

  showBtn(i) {
    console.log(i);
    if (this.showUtilites[i]) {
      delete this.showUtilites[i];
    } else {
      this.showUtilites = {};
      this.showUtilites[i] = true;
    }
    // if (
    //   Object.keys(this.showUtilites).length
    //   && Object.keys(this.showUtilites)[0] == i) {
    //   delete this.showUtilites[i];
    // } else {
    //   this.showUtilites= {};
    //   this.showUtilites[i] = true;
    // }


    // this.showUtilites = !this.showUtilites;
  }


  loadRoles() {
    this.roleServ.getRoles().subscribe((roleData: any) => {
      console.log(roleData);
      this.roles = roleData.data
      .sort((a , b) => {
        return a < b ? -1 : 1;
      });
    });
  }

  deleteRole(roleId: string) {
    this.roleServ.deleteRole(roleId).subscribe(
      (data: any) => {
        // console.log(data);
        console.log("before",this.roles)
        this.filterdRoles = this.roles.filter((role) => role.id !== roleId);
        this.loadRoles();
        // console.log(this.filterdRoles)
      },
      (err) => {
        console.log(err);
      }
      );
  }


  deleteAll() {
    this.roleServ.deleteAllRoles().subscribe(
      (deletedData) => {
        console.log(deletedData);
        this.loadRoles();
        this.selectedAll = false;
      }
    )
  }

  editRole(roleItem) {
    this.roleServ.roleData = roleItem;
    this.route.navigate(['/edit'])
  };



}
