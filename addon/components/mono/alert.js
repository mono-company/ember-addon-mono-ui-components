import Component from '@glimmer/component';

export default class Alert extends Component {

  get skin() {
    if (this.args.skin) {
      return "c-alert--"+this.args.skin;
    } else {
      return "c-alert--default";
    }
  }

}
