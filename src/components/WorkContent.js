import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, Typography } from "@mui/material";

const WorkContent = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.title}</Typography>
        <Typography>{props.body}</Typography>
        <CardActions>
          <Button href={props.link}>Learn More</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default WorkContent;