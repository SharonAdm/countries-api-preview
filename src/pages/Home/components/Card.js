import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ data, showDetails }) {
  return (
    <Card sx={{ maxWidth: 275 }} onClick={showDetails} className=" text-text-light bg-background-light dark:text-text-dark dark:bg-background-dark">
      <CardMedia sx={{ height: 140 }} image={data.flags.png} title={data.flags.alt} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.name.common}
        </Typography>
        <Typography variant="body2">population: {data.population}</Typography>
        <Typography variant="body2">region: {data.region}</Typography>
        <Typography variant="body2">capital: {data.capital}</Typography>
      </CardContent>
    </Card>
  );
}
