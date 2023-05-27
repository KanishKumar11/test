import { createSlice } from '@reduxjs/toolkit';

export const classSlice = createSlice({
  name: 'class',
  initialState: {
    classId: '',
    class_name: '',
    createdAt: '',
    subjects: [],
    groupId:'',
  },
  reducers: {
    setClassInfo : (state, action) => {
      state.classId = action.payload.classId
      state.class_name = action.payload.class_name
      state.subjects = action.payload.subjects
    },
  }
});

export const { setClassInfo } = classSlice.actions;

export const selectclassId = state => state.class.classId;
export const selectSubject = state => state.class.subjects;
export const selectclassName = state => state.class.class_name;

export default classSlice.reducer;
