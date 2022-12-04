import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'muhammad usman', email: 'usmanawan.ua10@gmail.com' };
  }
  store(body: any) {
    return body; 
  }
  update(body: any, userId: number ) {
    return { body, userId };
  }
  getUser(userId: number ) {
    return userId;
  }
  deleteUser(userId: number ) {
    return userId;
  }
  
}
