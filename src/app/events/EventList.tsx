"use client";

import {
  List,
  ListItem,
  ListItemButton,
  useTheme,
  ListItemText,
  SxProps,
  Theme,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import Link from "next/link";

const listItemStyle: SxProps<Theme> = (theme) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "8px",
  width: "350px",
  marginBottom: "20px",
  ":hover": {
    backgroundColor: orange[100],
  },
});

interface IEventListProps {
  events: any[];
}

export const EventList = (props: IEventListProps) => {
  const theme = useTheme();

  return (
    <List>
      {props.events.map((event: any) => {
        console.log(`test: ${JSON.stringify(event)}`);
        return (
          <Link key={event._id} href={`events/${event._id}`}>
            <ListItem key={event.id} disablePadding sx={listItemStyle}>
              <ListItemButton>
                <ListItemText
                  primaryTypographyProps={{ color: theme.palette.primary.main }}
                  secondaryTypographyProps={{
                    color: theme.palette.secondary.main,
                  }}
                  primary={event.name}
                  secondary={event.location}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};
