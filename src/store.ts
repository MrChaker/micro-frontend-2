import create from "zustand";
import { persist } from "zustand/middleware";

export const useCanvaStore = create(
    persist((set) => ({
        bg: "red",
        mutateColor: (color: string) => set((state) => ({ bg: color })),
    }))
);
