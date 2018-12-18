import * as React from "react";
import "./FormButton.scss";

export interface FormButtonProps {
  text: string;
  classes?: string;
  type?: string;
}

interface State {}

export class FormButton extends React.Component<FormButtonProps, State> {
  public static readonly displayName = "FormButton";

  constructor(props: FormButtonProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <button
        className={`FormButton ${this.props.classes}`}
        type={this.props.type ? this.props.type : "button"}
      >
        {this.props.text}
      </button>
    );
  }
}
