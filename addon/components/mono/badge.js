import Component from "@glimmer/component";

export default class Badge extends Component {

  get skin() {
    return this.args.skin;
  }
  
}