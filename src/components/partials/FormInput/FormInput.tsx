import * as React from "react";
import "./FormInput.scss";

export interface FormInputProps {
  identifier: string;
  type?: string;
  val: string | undefined;
}

interface State {
  email: string | undefined;
  password: string | undefined;
}

export class FormInput extends React.Component<FormInputProps, State> {
  public static readonly displayName = "FormInput";

  constructor(props: FormInputProps, context: any) {
    super(props, context);

    this.state = {
      email: undefined,
      password: undefined
    };
  }

  public render(): JSX.Element {
    return (
      <div className={"FormGroup"}>
        <label className={"FormGroup__label"}>{this.props.identifier}:</label>
        <input type={this.props.type ? this.props.type : "text"} className={"FormGroup__input"} value={this.props.val} />
      </div>
    );
  }
}
