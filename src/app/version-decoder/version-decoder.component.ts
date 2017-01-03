import { Component, OnInit } from '@angular/core';
import { version } from './version'

@Component({
  selector: 'app-version-decoder',
  templateUrl: './version-decoder.component.html'
})
export class VersionDecoderComponent implements OnInit {

  public vs:version;

  constructor() { }

  ngOnInit() {
    this.vs=new version("a-b-c-d-e-f-g");
    this.vs.decodeVersion();
  }

  onClickMe() {
    console.log("onclickMe");
    this.vs.versionString="a-b-c-d-1-2-3-4";
  }

  onEnter(value: string) {
    console.log("onEnter " + value);
    this.vs.versionString=value;
  }
}
