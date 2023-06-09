import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
    channelUrl: ''
  },
  reducers: {
    setChannelInfo : (state, action) => {
      state.channelUrl = action.payload.channelUrl
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    },
  }
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = state => state.app.channelId;
export const selectChannelName = state => state.app.channelName;

export default appSlice.reducer;
