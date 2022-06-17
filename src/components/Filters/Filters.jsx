import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Input, Slider, TextField, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  positin: "absolute",
  width: "10%",
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignSelf: "center",
  // justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
}));

const Filters = ({ search, setSearch, price, setPrice }) => {
  return (
    <div>
      <Search
        style={{
          display: "flex",
          width: "250px",
          height: "42px",
          margin: "20px",
          paddingLeft: "15px",
          borderRadius: "30px",
          border: "2px solid blue",
          background: "lightblue",
          outline: "none",
          position: "relative",
          transition: ".3s linear",
        }}
      >
        <StyledInputBase
          value={search}
          style={{ color: "black", backgroundColor: "whitesmoke" }}
          placeholder="Поиск событий"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon
            style={{
              width: "30px",
              height: "30px",
              background: "blue",
              border: "2px",
              color: "white",

              position: "absolute",
              top: "5px",
              right: "7px",
            }}
          />
        </SearchIconWrapper>
      </Search>
      <Box style={{ border: "1px solid black", width: "300px" }}>
        <Typography textAlign="center" variant="h5">
          Цена{" "}
        </Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => setPrice(value)}
          valueLabelDisplay="auto"
          min={50}
          max={5000}
          step={50}
        />
        <TextField
          style={{ width: "100px" }}
          type="number"
          value={price[0]}
          label="От"
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          style={{ width: "100px", marginLeft: "40px" }}
          value={price[1]}
          type="number"
          label="До"
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
      </Box>
    </div>
  );
};

export default Filters;
