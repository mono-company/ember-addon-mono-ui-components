import Component from '@glimmer/component';

export default class Spacer extends Component {

  get space() {
    return this.args.space;
  }
  
  get side() {
    return this.args.side;
  }

}