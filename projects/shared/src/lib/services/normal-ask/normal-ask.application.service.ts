import { NormalAskService } from './normal-ask.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NormalAsk } from '@local/common';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class NormalAskApplicationService {
  constructor(
    private readonly normalAsk: NormalAskService,
    private readonly loadingDialog: LoadingDialogService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) {}

  async create(data: NormalAsk) {
    const dialogRef = this.loadingDialog.open('Sending Ask');
    try {
      this.normalAsk.create(data);
    } catch {
      this.snackBar.open('Error has occured', undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully Ask', undefined, {
      duration: 6000,
    });

    await this.router.navigate(['txs']);
  }
}