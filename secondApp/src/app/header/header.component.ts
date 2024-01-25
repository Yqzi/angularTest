import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSub: Subscription;

  constructor(private dsService: DataStorageService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  logout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchRecipes() {
    this.dsService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
