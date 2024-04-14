import {
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../../../lib/types";
import { useState } from "react";

const CATEGORIES = ["Sports", "Pub", "Music", "Movies"];

interface ICategorySelect {
  control: Control<FormInputs>;
}

const CategorySelect = (props: ICategorySelect) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryValue(event.target.value as string);
  };

  const [categoryValue, setCategoryValue] = useState<string>();

  return (
    <></>
    // <Controller
    //   name="category"
    //   control={props.control}
    //   render={() => (
    //     <FormControl>
    //       <InputLabel id="category">Category</InputLabel>
    //       <Select
    //         id="category"
    //         value={categoryValue}
    //         onChange={handleChange}
    //         sx={{
    //           width: "400px",
    //           color: "white"
    //         }}
    //         label="Category"
    //       >
    //         {CATEGORIES.map((category: string) => (
    //           <MenuItem key={category} value={category}>
    //             {category}
    //           </MenuItem>
    //         ))}
    //       </Select>
    //     </FormControl>
    //   )}
    // />
  );
};

export default CategorySelect;
