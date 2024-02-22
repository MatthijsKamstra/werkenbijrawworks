import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as QRCode from "qrcode-svg";
import { EnvironmentService } from 'src/app/services/environment.service';
import { Constants } from 'src/app/shared/constants/constants';
import { IFakeDatabase } from 'src/app/shared/interfaces/i-fakedatabase';
import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
  selector: 'app-uitleg-page',
  templateUrl: './uitleg-page.component.html',
  styleUrls: ['./uitleg-page.component.scss']
})
export class UitlegPageComponent implements OnInit {

  title: string = 'Uitleg';

  _IFakeDatabase!: IFakeDatabase;
  users!: IUser[];

  constructor(
    private sanitizer: DomSanitizer,
    private environmentService: EnvironmentService
  ) { }

  ngOnInit() {
  }

  // ____________________________________ user related ____________________________________

  convert2QR(name: string): SafeHtml {
    var url = `${Constants.URL}/actie/${name}`;
    var svg = new QRCode(url).svg();
    // return svg;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  toUserUrl(name: string) {
    let url = `${Constants.URL}/actie/${name}`;
    if (!this.environmentService.isProduction()) {
      url = `/actie/${name}`;
    }
    return url;
  }

}
