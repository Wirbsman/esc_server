import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-simple-signup',
    templateUrl: './simple-signup.component.html',
    styleUrls: ['../log-in/log-in.component.css']
})
export class SimpleSignupComponent {

    readonly usernameFC = new FormControl<string>('', {
        validators: [Validators.required, Validators.minLength(3)]
    });

    public invalidLogin = false;

    constructor(private readonly appService: AppService, private readonly authService: AuthService, private readonly router: Router) {
    }

    signUp() {
        if (!this.usernameFC.valid || !this.usernameFC.value) {
            return;
        }

        try {
            lastValueFrom(this.authService.simpleSignUp$({
                username: this.usernameFC.value,
            })).then(() => {
                this.invalidLogin = false;
                this.appService.isLoggedIn = true;
                void this.router.navigateByUrl('/vote');
            }).catch((e) => {
                console.error(e);
                this.appService.isLoggedIn = false;
                this.invalidLogin = true;
            });
        } catch (e) {
            console.error(e);
            this.appService.isLoggedIn = false;
            this.invalidLogin = true;
        }
    }
}
