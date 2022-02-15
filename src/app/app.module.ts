import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {enableProdMode} from '@angular/core';
import{AngularFireStorageModule} from '@angular/fire/compat/storage'
import { AngularFireStorage } from '@angular/fire/compat/storage';





import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from './footer/footer.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ErrorComponent } from './error/error.component';
import { CacheComponent } from './cache/cache.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Detail2Component } from './detail2/detail2.component';
import { Detail3Component } from './detail3/detail3.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GoodsComponent } from './goods/goods.component';
import { AddaccessoriesComponent } from './addaccessories/addaccessories.component';
import { ModifaccessComponent } from './modifaccess/modifaccess.component';
import { VideComponent } from './vide/vide.component';
import { AddclothesComponent } from './addclothes/addclothes.component';
import { AdddecorComponent } from './adddecor/adddecor.component';
import { PrincipalComponent } from './principal/principal.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifproductComponent } from './modifproduct/modifproduct.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { ModifclothesComponent } from './modifclothes/modifclothes.component';
import { ModifdecorationComponent } from './modifdecoration/modifdecoration.component';
import { CommandeComponent } from './commande/commande.component';
import { AuthadminComponent } from './authadmin/authadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    RegistrationComponent,
    AuthentificationComponent,
    ContactComponent,
    ProductsComponent,
    CommentsComponent,
    FooterComponent,
    ClothesComponent,
    AccessoriesComponent,
    DecorationComponent,
    ErrorComponent,
    CacheComponent,
    HomeComponent,
    DetailsComponent,
    Detail2Component,
    Detail3Component,
    CartComponent,
    AdminComponent,
    SignupComponent,
    LoginComponent,
    GoodsComponent,
    AddaccessoriesComponent,
    ModifaccessComponent,
    VideComponent,
    AddclothesComponent,
    AdddecorComponent,
    PrincipalComponent,
    AccueilComponent,
    ModifproductComponent,
    A2Component,
    A3Component,
    ModifclothesComponent,
    ModifdecorationComponent,
    CommandeComponent,
    AuthadminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule ,
    AngularFireStorageModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyBJcradgq0RJmC9a9cAldUG7kf7HlrV6Xg",
      authDomain: "e-commerce666.firebaseapp.com",
      projectId: "e-commerce666",
      storageBucket: "e-commerce666.appspot.com",
      messagingSenderId: "808607923415",
      appId: "1:808607923415:web:d13d0c51ed99d5ddde8492"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
