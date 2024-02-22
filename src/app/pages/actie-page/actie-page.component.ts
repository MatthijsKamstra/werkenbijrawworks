import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CookieStorageService } from 'src/app/services/cookie-storage.service';
import { Constants } from 'src/app/shared/constants/constants';
import { ICookie } from 'src/app/shared/interfaces/i-cookie';
import { IData, IPersonData } from 'src/app/shared/interfaces/i-data';

@Component({
  selector: 'app-actie-page',
  templateUrl: './actie-page.component.html',
  styleUrls: ['./actie-page.component.scss']
})
export class ActiePageComponent implements OnInit {

  title = "Actie";

  private storageKey = 'werkenbyrawworks2024';

  id!: string | null;

  // check
  names: string[] = ['hande', 'matthijs', 'rollup'];

  // raw data
  data: IData = Constants.DATA;

  personData!: IPersonData;


  DEFAULT_COOKIE: ICookie = {
    data: []
  }
  cookie: ICookie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cookieStorageService: CookieStorageService,

  ) {
    this.cookie = (this.cookieStorageService.getObject(this.storageKey) as ICookie) ? this.cookieStorageService.getObject(this.storageKey) as ICookie : this.DEFAULT_COOKIE
    console.log(this.cookie);
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    if (!this.id) {
      console.warn('niet op de juiste manier hier gekomen');
      this.router.navigate(['/']);
      return;
    }
    console.log(this.id);
    // else {
    //   let obj: ICookie = this.cookieStorageService.getObject(this.storageKey) as ICookie;
    //   if (obj) {
    //     console.log(obj);

    //   }
    // }

    if (this.names.includes(this.id)) {
      console.log(`${this.id} is in the array.`);
      // // @ts-ignore
      // console.log(this.data[this.id]);
      // @ts-ignore
      this.personData = this.data[this.id] as IPersonData;
      // console.log(this.personData);

      // this.cookie = this.cookieStorageService.getObject(this.storageKey) as ICookie;

      console.log(this.cookie);
      console.log(this.cookie.data);

      if (!this.cookie.data.includes(this.id)) {
        this.cookie.data.push(this.id);
        this.cookieStorageService.setObject(this.storageKey, this.cookie);
      }



    } else {
      console.log(`${this.id} is not in the array.`);
    }



    // this.debug();
  }


  storeData(name: string) {

  }


  getPercentage(): number {
    let percentage = Math.round((this.cookie.data.length / this.names.length) * 100);
    return percentage;
  }

  // ____________________________________ debug ____________________________________

  debug() {
    let obj = {
      data:
        ["matthijs", "hande"]
    };
    this.cookieStorageService.setObject(this.storageKey, obj);
  }

  onDebugHandler() {
    this.cookieStorageService.clear();
  }



}
