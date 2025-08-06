import { Component, inject, input, OnInit } from '@angular/core';
import { GuardService } from '../../guards/guard-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterLink],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent implements OnInit {
  guardService = inject(GuardService);
  
  id = input(0)

  toggleAdmin() {
    this.guardService.isAdmin.update(current => !current);
  }
  ngOnInit() {
    console.log('RoutingComponent initialized with id:', this.id());
  }
}
