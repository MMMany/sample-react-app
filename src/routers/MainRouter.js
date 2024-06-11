import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TestAgentList from "../pages/TestAgentList";
import HdmiTestRequest from "../pages/HdmiTestRequest";
import HdmiTestResults from "../pages/HdmiTestResults";
import { NotFound } from "../pages/Errors";
import App from "../App";

const UriVersion = "v1";

export const Uri = {
  home: `/${UriVersion}/home`,
  agentList: `/${UriVersion}/agent/list`,
  hdmiTestRequest: `/${UriVersion}/hdmitest/request`,
  hdmiTestResults: `/${UriVersion}/hdmitest/results`,
  notFound: `/notfound`,
};

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={Uri.home} replace />} />
        <Route path={UriVersion}>
          <Route path="home" element={<HomePage />} />
          <Route path="agent">
            <Route path="list" element={<TestAgentList />} />
            <Route index element={<Navigate to={Uri.notFound} replace />} />
          </Route>
          <Route path="hdmitest">
            <Route path="request" element={<HdmiTestRequest />} />
            <Route path="results" element={<HdmiTestResults />} />
            <Route index element={<Navigate to={Uri.notFound} replace />} />
          </Route>
          <Route index element={<Navigate to={Uri.notFound} replace />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
