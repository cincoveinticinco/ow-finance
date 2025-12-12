import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import MenuList from './menu.json';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-doc-nav',
  imports: [Menu, TitleCasePipe, RouterLink, MatListModule],
  templateUrl: './doc-nav.html',
  styleUrl: './doc-nav.scss',
})
export class DocNav implements OnInit {
    readonly docMenuList = MenuList;
    activeLink: string | null = null;

    private router = inject(Router);

    ngOnInit(): void {
        this.activeLink = this.router.url;
    }
}
