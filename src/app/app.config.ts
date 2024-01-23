import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // AppRoutingModule, // Importa tu AppRoutingModule si es necesario
  ],
  declarations: [
    // No declares los componentes aquí
  ],
  bootstrap: [/* Bootstrap según sea necesario */],
})
export class AppConfigModule {}