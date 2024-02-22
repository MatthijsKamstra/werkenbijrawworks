import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CookieStorageService } from 'src/app/services/cookie-storage.service';

@Component({
  selector: 'app-actie-page',
  templateUrl: './actie-page.component.html',
  styleUrls: ['./actie-page.component.scss']
})
export class ActiePageComponent implements OnInit {
  title = "Actie";

  private storageKey = 'werkenbyrawworks2024';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cookieStorageService: CookieStorageService
  ) { }


  ngOnInit(): void {
    console.log(this.cookieStorageService.getObject(this.storageKey));
    let obj = {
      data:
        ["matthijs", "hande"]
    };
    this.cookieStorageService.setObject(this.storageKey, obj);
  }


}
