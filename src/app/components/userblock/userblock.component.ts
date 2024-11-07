import { Component, Input } from '@angular/core';
import { UserSaptarshi } from '../../Models/usersaptarshi';

@Component({
  selector: 'app-userblock',
  templateUrl: './userblock.component.html',
  styleUrl: './userblock.component.scss'
})
export class UserblockComponent {
  @Input() user!: UserSaptarshi; // Expecting a User objec
}
