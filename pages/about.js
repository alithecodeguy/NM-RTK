import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";

import { useSelector } from "react-redux";

import { selectCount } from "../lib/slices/counterSlice";
export default function About() {
  const count = useSelector(selectCount);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <span className="value">{count}</span>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={Link} naked href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
