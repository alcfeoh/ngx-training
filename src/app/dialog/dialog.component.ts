import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('NG ON CHANGES', changes);
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
