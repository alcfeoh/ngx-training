import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  imports: [NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit, OnChanges {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnChanges(changes: SimpleChanges): void {
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
