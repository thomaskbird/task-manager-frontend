import * as React from "react";
import "./ListAddForm.scss";

export interface ListAddFormProps {
  onSubmit(vals: object): void;
}

interface State {
  listName: string | undefined;
}

export class ListAddForm extends React.Component<ListAddFormProps, State> {
  public static readonly displayName = "ListAddForm";

  constructor(props: ListAddFormProps, context: any) {
    super(props, context);

    this.state = {
      listName: ""
    };
  }

  public render(): JSX.Element {
    return (
      <form className={"Form"} onSubmit={(event) => { this.submit(event) }}>
        <div className={"Form__group"}>
          <label htmlFor="name" className={"Form__group-label"}>
            Name:
          </label>
          <input
            type="text"
            id={"name"}
            className={"Form__group-text-input"}
            value={this.state.listName}
            onChange={(event) => {
              this.change(event);
          }} />
        </div>

        <button
          type="submit"
          className={"btn btn-primary"}
        >
          Create List
        </button>
      </form>
    );
  }

  private change(event: any): void {
    this.setState({
      listName: event.target.value
    });
  }

  private submit(event: any): void {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }
}