/* eslint-disable jsdoc/require-jsdoc */
import { Theme } from 'src/styles/themes';
import { create } from 'zustand';

interface Experience {
    theme: Theme;
}

interface ExperienceStore {
    experience: Experience;
    setExperience: (experience: Experience) => void;
    setTheme: (theme: Theme) => void;
}

const initialStateExperience: Experience = {
    theme: Theme.LightTheme,
};

export const themeSelector = (state: ExperienceStore) => state.experience.theme;

export const useExperienceStore = create<ExperienceStore>()((set) => ({
    experience: initialStateExperience,
    setExperience: (experience: Experience) => set(() => ({ experience })),
    setTheme: (theme: Theme) => set((state) => ({ experience: { ...state.experience, theme } })),
}));
