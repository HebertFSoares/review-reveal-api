import { User } from '../entity/User';
import { Game } from '../entity/Game';

export class LoginResponseDTO {
  id: number;
  email: string;
  token: string;
  game?: Game;
  constructor(user: User, token: string) {
    this.id = user.id;
    this.email = user.email;
    this.token = token;
  }
}
