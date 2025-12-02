import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],  // <--- Ajoute RouterModule ici
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
