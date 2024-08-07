import { lazy } from 'react';


import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TestAgentList from "../pages/TestAgentList";
import HdmiTestRequest from "../pages/HdmiTestRequest";
import HdmiTestResults from "../pages/HdmiTestResults";
import { NotFound } from "../pages/Errors";
import App from "../App";

export const Uri = {
  home: `/home`,
  agentList: `/agent/list`,
  hdmiTestRequest: `/hdmitest/request`,
  hdmiTestResults: `/hdmitest/results`,
};

const MainRoutes = {

};

export default MainRoutes;