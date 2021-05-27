import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./elements";

function Jet({ name, country }) {
  return (
    <Wrapper>
      <h3 className="Jet__name">{name}</h3>
      <p className="Jet__country">{country}</p>
    </Wrapper>
  );
}

Jet.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
};

export default Jet;
