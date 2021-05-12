import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  // Public
  {
    path: '',
    loadChildren: () =>
      import('@pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  // Auth
  {
    path: 'dashboard',
    children: [
      {
        path: 'abc',
        loadChildren: () =>
        import('@pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
      }
    ],
  },
  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
    import('@pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
