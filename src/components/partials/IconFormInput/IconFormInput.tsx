import * as React from "react";
import "./IconFormInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IconFormInputProps {
  onChange(event: any): void;
  icon: IconProp;
  placeholderText: string;
  val: any;
}

interface State {
  isFocused: boolean;
}

export class IconFormInput extends React.Component<IconFormInputProps, State> {
  public static readonly displayName = "IconFormInput";

  constructor(props: IconFormInputProps, context: any) {
    super(props, context);

    this.state = {
      isFocused: false
    };
  }

  public render(): JSX.Element {
    return (
      <div className={this.state.isFocused ? "IconFormInput focused" : "IconFormInput"}>
        <FontAwesomeIcon
          icon={this.props.icon}
          className={"IconFormInput__icon"}
        />
        <input
          type={"text"}
          className={"IconFormInput__text-input-field form-control"}
          value={this.props.val}
          placeholder={this.props.placeholderText}
          onFocus={() => {
            this.toggleFocus();
          }}
          onBlur={() => {
            this.toggleFocus();
          }}
          onChange={(event) => {
            this.props.onChange(event);
          }}
        />
      </div>
    );
  }

  private toggleFocus(): void {
    this.setState({ isFocused: !this.state.isFocused });
  }
}
