import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    locale: string;

    switchLanguage(language: string) {
        this.locale = language;
        this.translate.use(language);
    }

    constructor(private translate: TranslateService) {
        this.locale = this.translate.getBrowserLang();
        translate.setDefaultLang(this.locale);
    }
}