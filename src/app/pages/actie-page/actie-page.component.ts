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

  names: string[] = ['hande', 'matthijs', 'rollup'];
  data: IData = Constants.DATA;

  personData!: IPersonData;

  percentage: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cookieStorageService: CookieStorageService
  ) {
    this.percentage = this.getPrecentage();
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);

    // // @ts-ignore
    // console.log(this.data[this.id]);

    // @ts-ignore
    this.personData = this.data[this.id] as IPersonData;
    // console.log(this.personData);

    if (this.names.includes(this.id)) {
      console.log(`${this.id} is in the array.`);
    } else {
      console.log(`${this.id} is not in the array.`);
    }

    if (!this.id) {
      console.warn('niet op de juiste manier hier gekomen');
    } else {
      let obj: ICookie = this.cookieStorageService.getObject(this.storageKey) as ICookie;
      if (obj) {
        console.log(obj);

      }
    }

    // this.debug();
  }


  storeData(name: string) {

  }


  getPrecentage(): number {
    return 75;
  }


  debug() {
    console.log(this.cookieStorageService.getObject(this.storageKey));
    let obj = {
      data:
        ["matthijs", "hande"]
    };
    this.cookieStorageService.setObject(this.storageKey, obj);
  }


}
