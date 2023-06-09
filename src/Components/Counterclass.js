
import React from "react";
class Counterclass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>Vous avez cliqué {this.state.count} fois</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Cliquez ici
          </button>
        </div>
      );
    }
  }
  export default Counterclass ;