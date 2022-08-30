import { Component } from "react";
import Figure from "react-bootstrap/Figure";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class LatestRelease extends Component {
  render() {
    return (
      <Figure className="mt-3">
        {history.map((x) => (
          <Figure.Image className="col-2" key={x.asin} width={200} height={250} alt={x.title} src={x.img} />
        ))}
      </Figure>
    );
  }
}

export default LatestRelease;
