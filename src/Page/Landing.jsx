import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

class Landing extends Component {
  state = {
    page: "Profile",
  };

  goToProfile = () => {
    this.setState({
      page: "Profile",
    });
    console.log("Click Profile");
  };

  goToCalculate = () => {
    this.setState({
      page: "Calculate",
    });
    console.log("Click Calculate");
  };

  pageContainer = () => {
    switch (this.state.page) {
      case "Profile":
        return <h2>ข้อมูลสมาชิก</h2>;
      case "Calculate":
        return <h2>คำนวนการขอสินเชื่อ</h2>;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <div>
            <Toolbar />
            <Divider />
            <List>
              <ListItem button key={"Profile"} onClick={this.goToProfile}>
                <ListItemText primary={"ข้อมูลสมาชิก"} />
              </ListItem>
              
              <ListItem button key={"Calculate"} onClick={this.goToCalculate}>
                <ListItemText primary={"คำนวนการขอสินเชื่อ"} />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <h1>ระบบคำนวนวงเงินสินเชื่อ</h1>
        {this.pageContainer()}
      </div>
    );
  }
}

export default Landing;
