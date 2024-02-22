import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as QRCode from "qrcode-svg";
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

}
