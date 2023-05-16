import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ data, showDetails }) {
  return (
    <Card sx={{ maxWidth: 275 }} onClick={showDetails}>
      <CardMedia sx={{ height: 140 }} image={data.flags.png} title={data.flags.alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name.official}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          population: {data.population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          region: {data.region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          capital: {data.capital}
        </Typography>
      </CardContent>
    </Card>
  );
}
