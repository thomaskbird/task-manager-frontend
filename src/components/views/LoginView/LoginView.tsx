import * as React from "react";
import "./LoginView.scss";
import { FormInput } from "../../partials/FormInput/FormInput";
import { FormButton } from "../../partials/FormButton/FormButton";

export interface LoginViewProps {
  config?: object;
}

interface State {
  email: string | undefined;
  password: string | undefined;
}

export class LoginView extends React.Component<LoginViewProps, State> {
  public static readonly displayName = "Login";

  constructor(props: LoginViewProps, context: any) {
    super(props, context);

    this.state = {
      email: undefined,
      password: undefined
    };
  }

  public render(): JSX.Element {
    return (
      <form className={"LoginView"} onSubmit={(evt: any) => { this.submit(evt); }}>
        <FormInput
          identifier={"email"}
          type={"email"}
          val={this.state.email}
        />
        <FormInput
          identifier={"password"}
          type={"password"}
          val={this.state.password}
        />

        <FormButton
          type={"submit"}
          classes={"primary"}
          text={"Submit"}
        />
      </form>
    );
  }

  private submit(event: Event): void {
    // todo: remove this once login is plugged in
    console.log("submit", this.state.email, this.state.password);
    window.location = "/dashboard";
    event.preventDefault();
  }
}
