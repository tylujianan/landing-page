import {create} from "zustand";
import {persist} from "zustand/middleware"

type Theme = "light" | "dark";
interface ThemeStore {
    theme: Theme;
    toogleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
    persist((set, get) => ({
        theme: typeof window !== "undefined" && window.matchMedia("(prefers-color-schema: dark)").matches ? "dark" : "light",
        toogleTheme: () => {
            const newTheme: Theme = get().theme === "light" ? "dark" : "light";
            if (typeof document !== "undefined") {
                document.documentElement.classList.toggle("dark", newTheme === "dark");
            }

            set({theme: newTheme});
        }
    }),{name: "theme", onRehydrateStorage: () => (state) => {
        if(state?.theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }})
);

export default useThemeStore;