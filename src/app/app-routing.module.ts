import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ErrorComponent } from './error/error.component';
import { CacheComponent } from './cache/cache.component';
import { DetailsComponent } from './details/details.component';
import { Detail2Component } from './detail2/detail2.component';
import { Detail3Component } from './detail3/detail3.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AddaccessoriesComponent } from './addaccessories/addaccessories.component';
import { ModifaccessComponent } from './modifaccess/modifaccess.component';
import { VideComponent } from './vide/vide.component';
import { AddclothesComponent } from './addclothes/addclothes.component';
import { AdddecorComponent } from './adddecor/adddecor.component';
import { PrincipalComponent } from './principal/principal.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ModifproductComponent } from './modifproduct/modifproduct.component';
import { ModifclothesComponent } from './modifclothes/modifclothes.component';
import { ModifdecorationComponent } from './modifdecoration/modifdecoration.component';
import { AuthGuard } from './guards/auth.guard';
import { CommandeComponent } from './commande/commande.component';
import { AuthadminComponent } from './authadmin/authadmin.component';
import { AuthadminGuard } from './guards/authadmin.guard';

const routes: Routes = [


  {path:'clothes',component:ClothesComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'decoration',component:DecorationComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]  },
  {path:'addaccessories',component:AddaccessoriesComponent, },
  {path:'addclothes',component:AddclothesComponent,  },
  {path:'adddecoration',component:AdddecorComponent,  },
  {path:'home',component:AccueilComponent,  },
  {path:'products',component:ProductsComponent,  },
  {path:'signup',component:SignupComponent,  },
  {path:'login',component:LoginComponent,  },
  {path:'modifproducts',component:ModifproductComponent,},
  {path:'admin',component:AdminComponent ,canActivate:[AuthadminGuard]},
  {path:'commande',component:CommandeComponent},
  {path:'authadmin',component:AuthadminComponent},
  {path:"modifacess/:id",component:ModifaccessComponent},
  {path:"admin/:id",component:ModifaccessComponent},
  {path:".admin/:id",component:ModifclothesComponent},
  {path:"..admin/:id",component:ModifdecorationComponent},
  {path:"accessories/:id",component:DetailsComponent},
  {path:"clothes/:id",component:Detail2Component},
  {path:"decoration/:id",component:Detail3Component},
  {path:'',redirectTo :'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
