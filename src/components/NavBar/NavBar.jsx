import { AppBar, Container, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NavBar = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Все"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Концерты"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Кино"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Семинары"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Детям"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Туризм"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Выставки"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Спорт"
      />
      <Tab
        style={{
          marginRight: "15px",
          fontSize: "12px",
          fontWeight: "800",
          color: "black",
        }}
        label="Разное"
      />
    </div>
  );
};

export default NavBar;
