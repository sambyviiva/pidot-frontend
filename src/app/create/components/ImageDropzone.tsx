import { Box, Button, useTheme } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { APP_BACKGROUND } from "@/app/_common/styles";

interface IDropzoneProps {
  imageFile: File | null;
  setImageFile: (file: File) => void;
}

const ImageDropzone = (props: IDropzoneProps) => {
  const [base64Image, setBase64Image] = useState<string | ArrayBuffer | null>(
    null
  );
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const acceptedFile = acceptedFiles[0];
    props.setImageFile(acceptedFile);

    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const binaryStr = reader.result;

        // const dataURL = `data:image/jpeg;base64,${btoa(binaryStr)}`;
      // Do whatever you want with the file contents
      setBase64Image(binaryStr);
    };
    // reader.readAsArrayBuffer(dataURL);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
    isFileDialogActive,
  } = useDropzone({
    onDrop,
    multiple: false,
  });

  const theme = useTheme();

  const focusedStyle = {
    borderColor: "#f500e9",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const baseStyle = {
    ...APP_BACKGROUND,
    width: "400px",
    height: "230px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    border: `3px dotted ${theme.palette.primary.main}`,
    borderRadius: 5,
    outline: "none",
    color: theme.palette.secondary.main,
  } as React.CSSProperties;

  const style = {
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
    ...(isFileDialogActive ? focusedStyle : {}),
  };

//   if(base64Image) {
//     return (

//     )
//   }

  return (
    <Box {...getRootProps({ style })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Box component="p" style={{}}>
          Drop files here
        </Box>
      ) : (
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <CloudDownloadIcon fontSize="large" />
          </Box>
          <Box sx={{ textAlign: "center" }}>Drag and drop some files here</Box>
          <Box sx={{ textAlign: "center", marginTop: "10px" }}>or</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button variant="outlined">Browse files</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageDropzone;
