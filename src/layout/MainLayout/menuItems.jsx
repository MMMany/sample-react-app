import { IconHome, IconDeviceImac, IconAutomation, IconReport } from "@tabler/icons-react";

const menuItems = {
  items: [
    {
      id: "home-group",
      title: "",
      type: "group",
      children: [
        {
          id: "home",
          title: "Home",
          type: "item",
          url: "/home",
          icon: IconHome,
        },
      ],
    },
    {
      id: "agents-group",
      title: "",
      type: "group",
      children: [
        {
          id: "agents",
          title: "Test Agent",
          type: "item",
          url: "/agents",
          icon: IconDeviceImac,
        },
      ],
    },
    {
      id: "test-request-group",
      title: "Test Request",
      type: "group",
      children: [
        {
          id: "hdmi-21",
          title: "HDMI 2.1",
          type: "collapse",
          children: [
            {
              id: "hdmi-21-sw",
              title: "S/W Test",
              type: "item",
              url: "/test-request/hdmi-21-sw",
              icon: IconAutomation,
            },
            {
              id: "hdmi-21-si",
              title: "SI Test",
              type: "item",
              // url: '/test-request/hdmi-21-si',
              icon: IconAutomation,
            },
          ],
        },
        {
          id: "hdmi-14",
          title: "HDMI 1.4",
          type: "collapse",
          children: [
            {
              id: "hdmi-14-sw",
              title: "S/W Test",
              type: "item",
              // url: '/test-request/hdmi-14-sw',
              icon: IconAutomation,
            },
            {
              id: "hdmi-14-si",
              title: "SI Test",
              type: "item",
              // url: '/test-request/hdmi-14-si',
              icon: IconAutomation,
            },
          ],
        },
      ],
    },
    {
      id: "test-results-group",
      title: "",
      type: "group",
      children: [
        {
          id: "test-results",
          title: "Test Results",
          type: "item",
          url: "/test-results",
          icon: IconReport,
        },
      ],
    },
  ],
};

export default menuItems;
