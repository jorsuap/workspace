import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mf',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://jorsuap.github.io/workspace/remoteEntry.js',
        exposedModule: './showInfoModule'
      }).then(m => m.ShowInfoModule),
  },
  // {
  //   path: 'mf-angular-14',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4242/remoteEntry.js',
  //       exposedModule: './mfAngular14'
  //     }).then(m => m.AppModule)
  // },
  // {
  //   path: 'mf-angular-14',
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:4242/remoteEntry.js',
  //     remoteName: 'mfAngular14',
  //     exposedModule: './mfAngular14',
  //     elementName: 'mf-angular-14'
  //   } as WebComponentWrapperOptions
  // },
  {
    path: 'mf-angular-14',
    component: WebComponentWrapper,
    data: {
      type:'module',
      remoteEntry: 'http://localhost:4242/remoteEntry.js',
      remoteName: 'mfAngular14',
      exposedModule: './mf-angular-remoto-14',
      elementName: 'mf-angular-14'
    } as WebComponentWrapperOptions
  }

];