import { storiesOf } from "@storybook/react";
import { Divider } from "../../src";
import styled from "styled-components";

storiesOf("Dividers", module).add("Simple", () => {
  return (
    <Grid>
      <Divider color="rgb(230, 155, 28)" highlightColor="rgb(189, 189, 189)" />
      <Divider color="rgb(43, 77, 89)" />
      <Divider color="rgb(1, 38, 48)" highlightColor="rgb(255, 255, 255)" />
      <Divider color="rgb(57, 153, 142)" />
    </Grid>
  )
});

const Grid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 15rem;
`;