export class AuthService {
  public isAuthenticated(): Promise<boolean> {
    let date: Date = new Date();
    if(date.getMinutes() % 2 === 0){
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }
}
