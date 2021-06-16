import { UsersService } from './../services/users.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


export interface AuthStateModel {
  token: string | null ;
  email: string | null;
  name: string  | null;
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string; password: string}){}
}

export class SignOut {
  static readonly type = '[Auth] SignOut';
}

@State<AuthStateModel>({
  name : 'Auth',
  defaults : {
    token : null ,
    name : null ,
    email : null
  }
})

@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static  isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static userDetails(state: AuthStateModel){
    return {
      name: state.name,
      email : state.email
    };
  }

  constructor(private userService: UsersService){}

  @Action(Login)
    login(
    ctx: StateContext<AuthStateModel>,
    action: Login
  ){
    return this.userService.login(action.payload.email , action.payload.password).pipe(
      tap( (result) => {
        ctx.patchState({
          // TODO: Fix this Error
          // token: result.token,
          // name : action.payload.  ,
          email : action.payload.email
        });
      })
    );
  }

  @Action(SignOut)
  logout({setState , getState}: StateContext<AuthStateModel>){
    const {token} = getState();
    return this.userService.signOut().pipe(
      tap(_ => {
        setState({
          token : null,
          email: null ,
          name : null
        });
      })
    );
  }
}
