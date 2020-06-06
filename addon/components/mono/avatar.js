import Component from '@glimmer/component';

export default class Avatar extends Component {

  get initials() {
    return this.args.initials;
  }

  get size() {
    return this.args.size;
  }

}