import { createSlice } from '@reduxjs/toolkit';

export const groupSlice = createSlice({
  name: 'group',
  initialState: {
    groupId: '',
    group_name: '',
    adminId:'',
    createdAt: '',
    expandable: null,
    group_category: '',
    group_desc: '',
    group_no: '',
    group_upi_id: '',
    teacher_requests: []
  },
  reducers: {
    setGroupInfo : (state, action) => {
      state.groupId = action.payload.groupId
      state.group_name = action.payload.group_name
      state.adminId = action.payload.adminId
    },
  }
});

export const { setGroupInfo } = groupSlice.actions;

export const selectGroupId = state => state.group.groupId;
export const selectGroupName = state => state.group.group_name;
export const selectAdminId = state => state.group.adminId;

export default groupSlice.reducer;
