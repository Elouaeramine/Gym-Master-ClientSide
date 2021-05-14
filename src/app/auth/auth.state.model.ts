import { UsersService } from './../services/users.service';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from 'rxjs/operators';


export class AuthStateModel {
  token?: string;
  email?: string;
  name?: string ;
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public email : string , public password :string ){}
}

export class SignOut {
  static readonly type = '[Auth] SignOut';
}

@State<AuthStateModel>({
  name : 'Auth'
})
export class AuthState {
  @Selector()
  static token(state : AuthStateModel){
    return state.token;
  }

  @Selector()
  static userDetails(state: AuthStateModel){
    return {
      name: state.name,
      email : state.email
    }
  }

  constructor(private userService : UsersService){}

  @Action(Login)
  login(
    {patchState} : StateContext<AuthStateModel>,
    {email , password } : Login
  ){
    return this.userService.login(email , password).pipe(
      tap(result =>{
        patchState({
          token: result.token,
          name :result.name ,
          email : result.email
        })
      })
    )
  }

  @Action(SignOut)
  logout({setState , getState} : StateContext<AuthStateModel>){
    const {token} = getState();
    return this.userService.signOut().pipe(
      tap(_ => {
        setState({});
      })
    )
  }
}
