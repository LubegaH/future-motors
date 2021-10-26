import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section
        title="Mercedes AMG-GT"
        description="Order Online Now"
        backgroundImg="/images/cover.jpeg"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
      ></Section>
      <Section
        title="Mercedes Benz-A1"
        description="Order Online Now"
        backgroundImg="/images/benz.jpeg"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
      ></Section>
      <Section
        title="Mercedes CLS45 AMG"
        description="Order Online Now"
        backgroundImg="/images/CLS45-AMG.jpeg"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
      ></Section>
      <Section
        title="Mercedes CLS63"
        description="Order Online Now"
        backgroundImg="/images/Mercedes_CLS63_AMG.jpeg"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
      ></Section>
    </Container>
  );
}

export default Home;
