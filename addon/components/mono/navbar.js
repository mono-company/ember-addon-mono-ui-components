import Component from '@glimmer/component';

export default class Navbar extends Component {

  get border() {
    if (this.args.border == "top")
      return "c-navbar--bordered-top";
    if (this.args.border == "none")
      return "";
    else
      return "c-navbar--bordered-bottom";
  }

  get skin() {
    if (this.args.skin)
      return "c-navbar--"+this.args.skin;
    else
      return "c-navbar--white";
  }
}
