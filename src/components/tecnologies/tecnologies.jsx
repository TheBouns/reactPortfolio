import "./tecnologies.css";
import Icon from "../devicon/Icon";

const tecnologiesNames = [
  "javascript",
  "css3",
  "html5",
  "mongodb",
  "mysql",
  "react",
  "github",
  "angularjs",
  "nodejs",
  "npm",
];
const names = (tecnologiesNames) => {
  return tecnologiesNames.map((tecnologie) => (
    <Icon key={`${tecnologie}`} name={`${tecnologie}`} />
  ));
};
const Tecnologies = () => {
  return <div className="logos">{names(tecnologiesNames)}</div>;
};

export default Tecnologies;
