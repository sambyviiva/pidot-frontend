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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import testPic from "../testPic.png";
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
  console.log(JSON.stringify(props.event));
  return (
    <Box sx={eventsContainer}>
      <Typography variant="h3" color="secondary" style={{ padding: "20px 0" }}>
        {props.event.name}
      </Typography>
      <Box sx={{display: "flex", width: "260px", justifyContent: "space-around", paddingBottom: "8px"}}>
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
          color="secondary"
          sx={{
            width: "350px",
            height: "100px",
            overflow: "scroll",
            marginBottom: "8px",
          }}
        >
          Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus
          kaikkea kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea
          kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee
          jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee
          tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän
          tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee
          ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten
          tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten
          tapahtuman kuvauksesta kuvauksesta kuvauksesta kuvauksesta kuvauksesta
        </Typography>
        <Typography color="secondary" component="p">
          Sijainti joku kiva, parhaimmillaan google maps
        </Typography>
        <Typography component="p" color="secondary">
          Ehkä jopa osoite
        </Typography>
        <Typography component="p" color="secondary">
          From {"10/12/2023 18:30"} until {"10/12/2023 18:30"}
        </Typography>
      </Box>
      <Box sx={{ marginTop: "8px" }}>
        <Typography color="secondary" sx={{ marginBottom: "8px" }}>
          Send response:
        </Typography>
        <TextField
          label="Name"
          sx={{ width: "350px" }}
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "170px",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() =>
                postAnswer("Sami V Test", "658743f76afff7f6f57554f9", "no")
              }
              // onClick={() => postAnswer(name, props.params.id, "no")}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() =>
                postAnswer("Sami V Test", "658743f76afff7f6f57554f9", "no")
              }
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
