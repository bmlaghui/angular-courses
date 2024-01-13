import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SalesComponent } from './components/sales/sales.component';
import { CustomersComponent } from './components/customers/customers.component';

export const routes: Routes = [
    {
        'path': 'login',
        component: LoginComponent
    },
    {
        'path': 'register',
        component: RegisterComponent
    },
    {
        'path': 'dashboard',
        component: DashboardComponent,
        children: [
            { 
                path: '',
                component: HomeComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'inventory',
                component: InventoryComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'sales',
                component: SalesComponent
            },
            {
                path: 'customers',
                component: CustomersComponent

            }
        ]
    },
    {
        'path': '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
