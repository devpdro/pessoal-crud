import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ConfirmDialogModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.module.scss'],
})
export class HomeComponent {
  constructor() {}

  ngOnInit(): void {}
}
