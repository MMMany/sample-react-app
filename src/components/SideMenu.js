import React from "react";
import {
  Home as HomeIcon,
  Devices as DevicesIcon,
  SettingsInputHdmi as HdmiIcon,
} from "@mui/icons-material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Uri } from "../routers/MainRouter";

export default function SideMenu() {
  const [selected, setSelected] = React.useState(Uri.home);

  const theme = useTheme();

  const MenuItemStyles = {
    icon: ({ level, active, disabled }) => {
      return {
        color: disabled
          ? theme.palette.text.disabled
          : theme.palette.primary.main,
      };
    },
    button: ({ level, active, disabled }) => {
      return {
        color: disabled
          ? theme.palette.text.disabled
          : active
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        backgroundColor:
          level > 0 ? theme.palette.background.variant : "transparent",
        "&:hover": {
          color: theme.palette.primary.main,
          backgroundColor:
            level > 0 ? theme.palette.background.variant : "transparent",
        },
      };
    },
  };

  React.useEffect(() => {
    if (window.location.pathname !== selected) {
      console.debug(
        `Force set 'selected(${selected})' to '${window.location.pathname}'`
      );
      setSelected(window.location.pathname);
    }
  }, [selected]);

  return (
    <Sidebar
      // backgroundColor={lighten(theme.palette.background.default, .3)}
      backgroundColor={theme.palette.background.container}
      rootStyles={{
        width: "100%",
        height: "100%",
        minWidth: "inherit",
        border: "unset",
      }}
    >
      <Menu menuItemStyles={MenuItemStyles}>
        <MenuItem
          icon={<HomeIcon />}
          component={<Link to={Uri.home} />}
          active={selected === Uri.home}
          onClick={React.useCallback(() => {
            setSelected(Uri.home);
          }, [])}
        >
          Home
        </MenuItem>
        <MenuItem
          icon={<DevicesIcon />}
          component={<Link to={Uri.agentList} />}
          active={selected === Uri.agentList}
          onClick={React.useCallback(() => {
            setSelected(Uri.agentList);
          }, [])}
        >
          Test Agent
        </MenuItem>
        <SubMenu open={true} icon={<HdmiIcon />} label="HDMI Test">
          <MenuItem
            component={<Link to={Uri.hdmiTestRequest} />}
            active={selected === Uri.hdmiTestRequest}
            onClick={React.useCallback(() => {
              setSelected(Uri.hdmiTestRequest);
            }, [])}
          >
            Request
          </MenuItem>
          <MenuItem
            component={<Link to={Uri.hdmiTestResults} />}
            active={selected === Uri.hdmiTestResults}
            onClick={React.useCallback(() => {
              setSelected(Uri.hdmiTestResults);
            }, [])}
          >
            Results
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
