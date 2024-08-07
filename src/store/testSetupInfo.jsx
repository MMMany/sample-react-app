import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  option: "",
  file: {
    blobUrl: "",
    name: "",
  },
  requester: "",
  agentId: "",
};

const validator = (obj) =>
  !Object.keys(obj)
    .map((v) => Object.keys(initialState).includes(v))
    .includes(false);

const testSetupInfoSlice = createSlice({
  name: "testSetupInfo",
  initialState,
  reducers: {
    setTestSetupInfo(state, action) {
      if (!validator(action.payload)) {
        throw new Error("invalid payload");
      }
      state.title = action.payload.title;
      state.option = action.payload.option;
      state.file = action.payload.file;
      state.requester = action.payload.requester;
      state.agentId = action.payload.agentId;
    },
    clearTestSetupInfo: () => initialState,
  },
});

export const { setTestSetupInfo, clearTestSetupInfo } = testSetupInfoSlice.actions;
export default testSetupInfoSlice.reducer;
