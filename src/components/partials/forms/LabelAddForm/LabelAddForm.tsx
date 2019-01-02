import * as React from "react";
import "./LabelAddForm.scss";

export interface LabelAddFormProps {
  onSubmit(vals: object): void;
}

interface State {
  labelName: string | undefined;
}

export class LabelAddForm extends React.Component<LabelAddFormProps, State> {
  public static readonly displayName = "LabelAddForm";

  constructor(props: LabelAddFormProps, context: any) {
    super(props, context);

    this.state = {
      labelName: ""
    };
  }

  public render(): JSX.Element {
    return (
      <form className={"Form"} onSubmit={(event) => { this.submit(event) }}>
        <div className={"Form__group"}>
          <label htmlFor="name" className={"Form__group-label form-control"}>
            Name:
          </label>
          <input
            type="text"
            id={"name"}
            className={"Form__group-text-input"}
            value={this.state.labelName}
            onChange={(event) => {
              this.change(event);
          }} />
        </div>

        <button
          type="submit"
          className={"btn btn-primary"}
        >
          Create Label
        </button>
      </form>
    );
  }

  private change(event: any): void {
    this.setState({
      labelName: event.target.value
    });
  }

  private submit(event: any): void {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }
}