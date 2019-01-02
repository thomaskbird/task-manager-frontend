import * as React from "react";
import "./IconFormInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SupportedTextInputIconTypes } from "../../../interfaces";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IconFormInputProps {
  icon: SupportedTextInputIconTypes | IconProp;
  val: any;
}

interface State {}

export class IconFormInput extends React.Component<IconFormInputProps, State> {
  public static readonly displayName = "IconFormInput";

  constructor(props: IconFormInputProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={"IconFormInput"}>
        <FontAwesomeIcon
          icon={this.props.icon}
          className={"IconFormInput__icon"}
        />
        <input type={"text"} className={"IconFormInput__text-input-field"} value={this.props.val} />
      </div>
    );
  }
}
