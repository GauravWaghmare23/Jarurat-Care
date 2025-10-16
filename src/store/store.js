import { configureStore, createSlice } from '@reduxjs/toolkit';

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    data: [],
    loading: false,
    error: null,
    selectedPatient: null
  },
  reducers: {
    setPatients: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
    addPatient: (state, action) => {
      const newPatient = action.payload;
      const patient = {
        id: newPatient.id,
        name: newPatient.name,
        age: newPatient.age,
        gender: newPatient.gender || '',
        contact: newPatient.contact,
        email: newPatient.email || '',
        address: newPatient.address || '',
        medical_record: {
          history: newPatient.history || '',
          blood_type: newPatient.blood_type || '',
          allergies: newPatient.allergies ? [newPatient.allergies] : [],
          last_visit: newPatient.last_visit || '',
          hospital_condition: {
            status: newPatient.status || '',
            admitted_for: newPatient.admitted_for || '',
            discharge_date: newPatient.discharge_date || '',
            primary_physician: newPatient.primary_physician || ''
          }
        }
      };
      state.data.push(patient);
    }
  }
});

export const { setPatients, setLoading, setError, setSelectedPatient, addPatient } = patientsSlice.actions;

const store = configureStore({
  reducer: {
    patients: patientsSlice.reducer
  }
});

export default store;
