import { ElementRef, Output, ViewChild } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter< { serverName: string, serverContent: string}>();
  // newServerName = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  
  constructor() { }

  //a lifecycle ho ok
  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
       serverName: serverNameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
