import{Component} from 'react';


export default class ClassComponent extends Component {
constructor(props){
    super(props);
    console.log(this);
    this.state ={
        etat1: "test",
        etat2: {
            etat21: "test2",
        },
    }}
  render() {
    return <> 
<h1>Hello {this.props.name} from class component</h1>
<h2>Etat 1 : {this.state.etat1}</h2>
<h2>Etat 2 : {this.state.etat2.etat21}</h2>
</>
  }
}