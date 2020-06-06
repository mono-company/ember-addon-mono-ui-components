import Component from '@glimmer/component';

export default class Input extends Component {

  get type() {
    if (type) {
      return this.args.type;
    } else {
      return 'text';
    }
  }

  get value() {
    return this.args.value;
  }

}