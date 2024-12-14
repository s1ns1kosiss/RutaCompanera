import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async register() {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('Usuario registrado:', user);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}
