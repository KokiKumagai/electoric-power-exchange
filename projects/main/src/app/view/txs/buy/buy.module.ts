import { MaterialModule } from '../../../material.module';
import { BuyComponent } from './buy.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BuyComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [BuyComponent],
})
export class BuyModule {}
