import { Box, Button, SxProps, TextField, Typography } from "@mui/material";
import Image from "next/image";
import testPic from "./testPic.png";

interface IProps {
  params: {
    id: string;
  };
}

const pageContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const eventsContainer: SxProps = {
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Event = async (props: IProps) => {
  // const response =
  return (
    <Box sx={pageContainer}>
      <Box sx={eventsContainer}>
        <Typography
          variant="h3"
          color="secondary"
          style={{ padding: "20px 0" }}
        >
          My Event WOW
        </Typography>
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
            kivaa jee jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa
            jee jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee
            jeee tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee
            tähän tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän
            tulee ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee
            ssitten tapahtuman Kuvaus kaikkea kivaa jee jeee tähän tulee ssitten
            tapahtuman kuvauksesta kuvauksesta kuvauksesta kuvauksesta
            kuvauksesta
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
          <TextField label="Name" sx={{ width: "350px" }} />
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box
              sx={{
                display: "flex",
                width: "170px",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <Button variant="contained" color="error">No</Button>
              <Button variant="contained" color="success">Yes</Button>
            </Box>
          </Box>
        </Box>
        {/* <Typography color="secondary">{`Route: ${props.params.id}`}</Typography> */}
      </Box>
    </Box>
  );
};

export default Event;
