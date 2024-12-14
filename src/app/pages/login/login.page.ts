import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login() {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Usuario logueado:', user);
      this.router.navigate(['/home']); // Cambia 'home' por la ruta de tu página principal.
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}
