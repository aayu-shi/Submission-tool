import React, { useState } from "react";
import styled from "styled-components";
const Tab = styled.button`
  font-size: 16px;
  padding: 10px 40px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #0070dd;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ["Availabe Classrooms", "My Classrooms"];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p> {active} </p>
    </>
  );
}
// Usage
<TabGroup />;

export default TabGroup;
