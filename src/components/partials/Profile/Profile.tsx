import * as React from "react";
import "./Profile.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface ProfileProps {}

interface State {
  isProfileBodyVisible: boolean;
}

export class Profile extends React.Component<ProfileProps, State> {
  public static readonly displayName = "Profile";

  constructor(props: ProfileProps, context: any) {
    super(props, context);

    this.state = {
      isProfileBodyVisible: false
    };
  }

  public render(): JSX.Element {
    return (
      <div className={"Profile"}>
        <div className={"Profile__header"} onClick={() => {
          this.toggleProfileBody();
        }}>
          <div className={"Profile__header-image"}>
            <img src="/public/profile-pic.png" />
          </div>
          <div className={"Profile__header-name"}>
            Thomas Bird
            <FontAwesomeIcon
              icon={this.state.isProfileBodyVisible ? "chevron-up" : "chevron-down"}
              className={"Profile__header-toggle-btn"}
            />
          </div>
        </div>
        <div className={this.state.isProfileBodyVisible ? "animated Profile__body open" : "animated Profile__body"}>
          <ul className={"Profile__body-link-list"}>
            <li><a href="">Settings</a></li>
            <li><a href="">Notifications</a></li>
            <li><a href="">Sharing</a></li>
          </ul>

          <ul className={"Profile__body-link-list"}>
            <li><a href="">Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }

  private toggleProfileBody(): void {
    this.setState({
      isProfileBodyVisible: !this.state.isProfileBodyVisible
    });
  }
}
