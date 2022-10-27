import create from "zustand";
import { persist } from "zustand/middleware";

const useCanvaStore = create(
    persist((set) => ({
        bg: "red",
        mutateColor: (color: string) => set((state) => ({ bg: color })),
    }))
);

export default useCanvaStore;
