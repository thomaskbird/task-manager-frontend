import * as React from "react";
import "./FormBase.scss";

export interface FormBaseProps {}

interface State {}

export class FormBase extends React.Component<FormBaseProps, State> {
  public static readonly displayName = "Modal";

  constructor(props: FormBaseProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public change(): void {
    
  }
}