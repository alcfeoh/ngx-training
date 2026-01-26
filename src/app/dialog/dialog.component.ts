import {Component, input, model, OnChanges, OnInit, output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {

  isOpen = model(false);
  title = input("Title");

  onClose = output<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('NG ON CHANGES', changes);
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  closePopup(): void {
    this.isOpen.set(false);
    this.onClose.emit('Pop-up window closed');
  }
}
