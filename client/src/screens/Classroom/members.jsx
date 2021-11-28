import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useParams } from "react-router-dom";
import GetMembers from "../../Actions/getMembers";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

//returns memers(people) of the classroom
export default function Members() {
  const { id } = useParams();
  const members = GetMembers(id);
  return (
    <Box
      sx={{
        flexGrow: 1,
        textTransform: "lowercase",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ minWidth: "100%" }}>
          <Demo>
            <List>
              {members.map((element, index) => (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="email">
                      <Link
                        to="#"
                        onClick={(e) => {
                          window.location = "mailto:" + element;
                          e.preventDefault();
                        }}
                      >
                        <EmailIcon />
                      </Link>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={index + 1 + ". " + element} />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
