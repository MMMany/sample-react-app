import React from "react";
import { useLocation } from "react-router-dom";
import { Home as HomeIcon, Devices as DevicesIcon, SettingsInputHdmi as HdmiIcon } from "@mui/icons-material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Uri } from "../routes/MainRoutes";

export default function SideMenu() {
  const menuItems = React.useRef([
    /**
     * Item properties
     *
     * id       : a key value
     * label    : a label for showing
     * type     : 'menu' or 'submenu'
     * icon     : (option) a icon component
     * uri      : (option) a uri path, only 'menu' type
     * children : (option) a child infomation, only 'submenu' type
     */
    {
      id: "home",
      label: "Home",
      type: "menu",
      uri: Uri.home,
      icon: <HomeIcon />,
    },
    {
      id: "test-agent",
      label: "Test Agent",
      type: "menu",
      uri: Uri.agentList,
      icon: <DevicesIcon />,
    },
    {
      id: "hdmi-test",
      label: "HDMI Test",
      type: "submenu",
      icon: <HdmiIcon />,
      children: [
        {
          id: "hdmi-test-request",
          label: "Request",
          type: "menu",
          uri: Uri.hdmiTestRequest,
        },
        {
          id: "hdmi-test-results",
          label: "Results",
          type: "menu",
          uri: Uri.hdmiTestResults,
        },
      ],
    },
  ]);
  const [selected, setSelected] = React.useState(Uri.home);
  const location = useLocation();
  const theme = useTheme();

  React.useEffect(() => {
    // console.debug(location);
    if (location.pathname !== selected) {
      // console.debug(`Force set 'selected(${selected})' to '${window.location.pathname}'`);
      setSelected(window.location.pathname);
    }
  }, [location, selected]);

  const MenuItemStyles = {
    icon: ({ level, active, disabled }) => {
      return {
        color: disabled ? theme.palette.text.disabled : theme.palette.primary.main,
      };
    },
    button: ({ level, active, disabled }) => {
      return {
        color: disabled
          ? theme.palette.text.disabled
          : active
          ? theme.palette.primary.main
          : theme.palette.text.primary,
        backgroundColor: level > 0 ? theme.palette.background.variant : "transparent",
        "&:hover": {
          color: theme.palette.primary.main,
          backgroundColor: level > 0 ? theme.palette.background.variant : "transparent",
        },
      };
    },
  };

  return (
    <Sidebar
      backgroundColor={theme.palette.background.container}
      rootStyles={{
        width: "100%",
        height: "100%",
        minWidth: "inherit",
        border: "unset",
      }}
    >
      <Menu menuItemStyles={MenuItemStyles}>
        {menuItems.current.map(function createMenuItem({ id, label, type, icon, uri, children }) {
          if (type === "menu") {
            return (
              <MenuItem
                key={id}
                icon={icon}
                component={<Link to={uri} />}
                active={selected === uri}
                onClick={() => setSelected(uri)}
              >
                {label}
              </MenuItem>
            );
          } else if (type === "submenu") {
            return (
              <SubMenu key={id} open={true} icon={icon} label={label}>
                {children?.map((obj) => createMenuItem(obj))}
              </SubMenu>
            );
          } else {
            throw new Error("Invalid type of menu item");
          }
        })}
        {/* <MenuItem
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
        </SubMenu> */}
      </Menu>
    </Sidebar>
  );
}
