import Component from '@glimmer/component';

export default class Button extends Component {

  get skin() {
    return this.args.skin;
  }

}