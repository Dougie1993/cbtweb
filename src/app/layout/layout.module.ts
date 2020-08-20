import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
    declarations: [
        LayoutComponent,
        MainNavComponent

    ],
    imports: [
        LayoutRoutingModule,
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ]
})
export class LayoutModule {}
