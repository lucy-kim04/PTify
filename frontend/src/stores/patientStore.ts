import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type Treatment = '적외선' | '전기치료' | '온열치료' | '도수치료';

export type Patient = {
  id: string;
  name: string;
  treatments: Treatment[];
  currentIndex: number; // 현재 처방 단계
  status: '대기중' | '진행중' | '종료됨';
};

type PatientStore = {
  patients: Patient[];
  addPatient: (name: string, treatments: Treatment[]) => void;
};

export const usePatientStore = create<PatientStore>((set) => ({
  patients: [],
  addPatient: (name, treatments) => {
    const newPatient: Patient = {
      id: uuidv4(),
      name,
      treatments,
      currentIndex: 0,
      status: '대기중',
    };
    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },
}));
