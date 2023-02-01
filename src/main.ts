import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore,provideFirestore } from "@angular/fire/firestore";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { environment } from "./environments/environment";

bootstrapApplication(AppComponent,{
    providers: [
        provideRouter(appRoutes),
        importProvidersFrom(
            provideFirebaseApp(()=> initializeApp(environment.firebase)),
            provideFirestore(()=>getFirestore())
        ),
    ],
}).catch((err)=>console.log(err));