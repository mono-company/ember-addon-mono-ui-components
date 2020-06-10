import Component from '@glimmer/component';

export default class Header extends Component {

  get level() {
    if (level) {
      return this.args.level;
    } else {
      return '';
    }
  }

  get skin() {
    if (this.args.skin)
      return "c-h"+this.args.skin;
    else
      return "c-h1";
  }

}