import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //test 
  public user = {
    email: '',
    password: '',
    firstName:'',
    lastName:''
 };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
 }
 signInWithTwitter() {
  this.authService.signInWithTwitter()
  .then((res) => { 
      this.router.navigate(['dashboard'])
    })
  .catch((err) => console.log(err));
}

signInWithFacebook() {
  this.authService.signInWithFacebook()
  .then((res) => { 
      this.router.navigate(['dashboard'])
    })
  .catch((err) => console.log(err));
}

signInWithGoogle() {
  this.authService.signInWithGoogle()
  .then((res) => {
      this.router.navigate(['dashboard'])
    })
  .catch((err) => console.log(err));
}
}
