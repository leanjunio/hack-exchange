import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";

const Rates = () => {
  const [rates, setRates] = useState([]);
  const [base, setBase] = useState("EUR");
  const [target, setTarget] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch(
          `https://api.exchangeratesapi.io/latest?base=${base}`
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (e) {
        console.error(e);
      }
    }
    fetchRates();
  }, [base]);

  function getCurrencies() {
    return Object.keys(rates);
  }

  function changeCurrentTargetCurrency(currency) {
    setConverted(0);
    setTarget(currency);
    setConverted((rates[currency] * amount).toFixed(2));
  }

  function changeBaseCurrency(currency) {
    setConverted(0);
    setBase(currency);
  }

  function changeAmount(event) {
    setConverted(0);
    setAmount(event.target.value);
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h3>{`Currency converter (currently set as ${base}): `}</h3>

            <Dropdown onSelect={(e) => changeBaseCurrency(e)}>
              <Dropdown.Toggle id="dropdown-basic" variant="outline-secondary">
                Select a base currency
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {getCurrencies().map((c, i) => (
                  <Dropdown.Item key={i} eventKey={c}>{c}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <input
              className="m-3"
              type="text"
              placeholder={`Enter an amount: ${amount}`}
              onChange={(e) => changeAmount(e)}
            />
            <br />
            <h6>{`Click the target currency (currently: ${target})`}</h6>
            {getCurrencies().map((c, i) => (
              <Button
                key={i}
                className="m-3"
                variant="outline-dark"
                onClick={() => changeCurrentTargetCurrency(c)}
              >
                {c}
              </Button>
            ))}

            {!!converted && (
              <h3 className="mt-5">{`${amount + " " + base} in ${target} is: ${converted}`}</h3>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Rates;
