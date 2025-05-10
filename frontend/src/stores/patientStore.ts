import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type Treatment = '적외선' | '전기치료' | '온열치료' | '도수치료';

export type Patient = {
  id: string;
  name: string;
  treatments: Treatment[];
  currentIndex: number; // 현재 처방 단계
  status: '대기중' | '진행중' | '종료됨';
  assignedBed?: number;
};

type PatientStore = {
  patients: Patient[];
  addPatient: (name: string, treatments: Treatment[]) => void;
  assignBed: (id: string, bedNumber: number) => void;
  nextTreatment: (id: string) => void;
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

  assignBed: (patientId, bedNumber) => {
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? { ...p, assignedBed: bedNumber, status: '진행중' }
          : p
      ),
    }));
  },

  nextTreatment: (id) => {
    set((state) => ({
      patients: state.patients.map((p) => {
        if (p.id !== id) return p;

        const nextIndex = p.currentIndex + 1;

        if (nextIndex >= p.treatments.length) {
          return {
            ...p,
            status: '종료됨',
            assignedBed: undefined,
          };
        }

        return {
          ...p,
          currentIndex: nextIndex,
        };
      }),
    }));
  },
}));
