import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  createdAt: string;
  image: string;
  alt: string;
};

export default function BlogCard(props: Props) {
  return (
    <Card sx={{ display: "flex", maxWidth: "90vw" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "90vw" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.createdAt}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia component="img" sx={{ width: 300 }} image={props.image} alt={props.title} />
    </Card>
  );
}
