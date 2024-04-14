"use client";

import {
  Box,
  Button,
  Icon,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import testPic from "../testi_event_kuva.jpg";
import { postAnswer } from "../actions/postAnswer";
import { useState } from "react";

interface IProps {
  event: any;
}

const eventsContainer: SxProps = {
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const EventInfo = (props: IProps) => {
  const [name, setName] = useState("");

  return (
    <Box sx={eventsContainer}>
      <Typography variant="h3" color="secondary" style={{ padding: "20px 0" }}>
        {props.event.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "260px",
          justifyContent: "space-around",
          paddingBottom: "24px",
        }}
      >
        <Button variant="outlined" color="success">
          <CheckIcon color="success" />
          {props.event.participants?.length ?? "0"}
        </Button>
        <Button variant="outlined" color="info">
          <QuestionMarkIcon color="info" />
          {props.event.maybe?.length ?? "0"}
        </Button>
        <Button variant="outlined" color="error">
          <CloseIcon color="error" />
          {props.event.declined?.length ?? "0"}
        </Button>
      </Box>
      <Image src={testPic} alt="ei varmana toimi" width={350} height={350} />
      <Box>
        <Typography
          component="p"
          color="primary"
          sx={{
            width: "350px",
            // height: "100px",
            overflow: "scroll",
            marginBottom: "8px",
          }}
        >
          {props.event.description}

          {/* Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus
          kaikkea kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea
          kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee
          jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee
          tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän
          tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee
          ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten
          tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten
          tapahtuman kuvauksesta kuvauksesta kuvauksesta kuvauksesta kuvauksesta */}
        </Typography>
        <Typography color="primary" component="p">
          {props.event.location ?? "No Location"}
        </Typography>
        <Typography component="p" color="primary">
          From
          <Typography component="span" sx={{ fontWeight: 700 }}>
            {` ${new Date(props.event.startDate).toDateString()} `}
          </Typography>
          until
          <Typography component="span" sx={{ fontWeight: 700 }}>
            {` ${new Date(props.event.endDate).toDateString()}`}
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ mt: "24px" }}>
        <TextField
          label="Name"
          variant="standard"
          sx={{ width: "350px", mb: "12px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "280px",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => postAnswer(name, props.event.id, "no")}
              // onClick={() => postAnswer(name, props.params.id, "no")}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => postAnswer(name, props.event.id, "maybe")}
              // onClick={() => postAnswer(name, props.params.id, "no")}
            >
              Maybe
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => postAnswer(name, props.event.id, "yes")}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Typography color="secondary">{`Route: ${props.params.id}`}</Typography> */}
    </Box>
  );
};

export default EventInfo;
