import * as React from "react";
import "./ListAddForm.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface ListAddFormProps {
  onSubmit(vals: object): void;
}

interface State {
  listName: string | undefined;
  isLabelShown: boolean;
}

export class ListAddForm extends React.Component<ListAddFormProps, State> {
  public static readonly displayName = "ListAddForm";

  constructor(props: ListAddFormProps, context: any) {
    super(props, context);

    this.state = {
      listName: undefined,
      isLabelShown: true
    };
  }

  public render(): JSX.Element {
    return (
      <form className={"Form ListAddForm"} onSubmit={(event) => { this.submit(event) }}>
        <div className={"Form__group inline"}>
          <label htmlFor="name" className={this.state.isLabelShown ? "Form__group-label" : "Form__group-label hidden"}>
            List name...
          </label>
          <input
            type="text"
            id={"name"}
            className={"Form__group-text-input form-control"}
            value={this.state.listName}
            onFocus={(event) => {
              this.focus(event);
            }}
            onChange={(event) => {
              this.change(event);
            }} />
          <button
            type="submit"
            className={"btn btn-primary"}
          >
            <FontAwesomeIcon
              icon="plus"
              className={"ListAddForm__button-icon"}
            />
          </button>
        </div>
      </form>
    );
  }

  private change(event: any): void {
    this.setState({
      listName: event.target.value
    });
  }

  private focus(event: any): void {
    this.setState({
      isLabelShown: !!this.state.isLabelShown
    })
  }

  private submit(event: any): void {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }
}