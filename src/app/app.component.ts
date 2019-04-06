import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { AuthService } from 'src/auth/auth.service';
import { LoginService } from 'src/auth/login/login.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
let Robo = 'Robo'

interface SuperPowers {
  name: string;
  ico?: string;
  goto?: string;
  children?: SuperPowers[];
}

const TREE_DATA: SuperPowers[] = [
  {
    name: 'Missions',
    ico: 'to-do',
    goto: 'todos',
    children: [
      {name: 'Planned missions'},
      {name: 'Missions in progress'},
      {name: 'Accomplished missions'},
    ]
  }, {
    name: 'Publications',
    ico: 'diary',
    goto: 'notes',
    children: [
      {
        name: 'Auto Biography',
        children: [
          {name: `${Robo} Assited`},
          {name: 'Penned'},
        ]
      }, {
        name: 'Random Ideas',
        children: [
          {name: `${Robo} Assisted`},
          {name: 'Penned'},
        ]
      },
    ]
  }, {
    name: 'Time travel',
    ico: 'hourglass',
    goto: 'time',
    children: [
      {name: `${Robo} Assisted`},
      {name: 'Penned'},
      {name: 'Statistics'},
    ]
  }, {
    name: 'Resource Manager ',
    ico: 'piggy-bank',
    goto: 'spends',
    children: [
      {name: `${Robo} Assisted`},
      {name: 'Penned'},
      {name: 'Statistics'},
    ]
  }, {
    name: 'Important Days',
    ico: 'calendar',
    goto: 'dates',
    children: [
      {name: `${Robo} Assisted`},
      {name: 'Penned'},
      {name: 'Statistics'},
    ]
  }, {
    name: 'Sidekicks',
    ico: 'elderly',
    goto: 'people',
    children: [
      {name: 'Family'},
      {name: 'Friends'},
      {name: 'Someone Special'},
    ]
  }
];

/**
 * @title Tree with nested nodes
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminLoggedIn: boolean = false;
  mode = new FormControl('over');
  aliveSubscription: boolean = true;
  
  treeControl = new NestedTreeControl<SuperPowers>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SuperPowers>();

  @ViewChild('sidenav') public sidenav;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService,    
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: SuperPowers) => !!node.children && node.children.length > 0;
  
  ngOnInit() {
    this.adminLoggedIn  = this.authService.isLoggedIn();
    this.authService.loggedIn.pipe(takeWhile(() => this.aliveSubscription)).subscribe(() => this.adminLoggedIn = true);
    this.authService.loggedOut.pipe(takeWhile(() => this.aliveSubscription)).subscribe(() => this.adminLoggedIn = false);
  }

  checkbutton() {
    this.sidenav.close()
    console.log("bunnies")
  }
  
  ngOnDestroy() {
    this.aliveSubscription = false;    
  }
}
