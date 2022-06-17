import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Input, Slider, TextField, Typography } from "@mui/material";

const Filters = ({ search, setSearch, price, setPrice }) => {
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
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      <Search
        style={{
          marginRight: "30px",
          border: "1px solid black",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={search}
          style={{ color: "black", backgroundColor: "whitesmoke" }}
          placeholder="Поиск событий"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
        />
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
