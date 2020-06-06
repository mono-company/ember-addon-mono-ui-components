import Component from '@glimmer/component';

export default class Header extends Component {

  get level() {
    if (level) {
      return this.args.level;
    } else {
      return '';
    }
  }

}