import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
    isDark: boolean;
    toggleTheme: () => void;
    isOpen: boolean; // Открыт ли сайдбар
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme, isOpen }) => {
    return (
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800/50">
            <button
                onClick={toggleTheme}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    isOpen ? "hover:bg-slate-200 dark:hover:bg-slate-800" : "justify-center hover:bg-slate-200 dark:hover:bg-slate-800"
                } text-slate-600 dark:text-slate-300`}
            >
                {isDark ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                    <Moon className="w-5 h-5 text-amethyst-600" />
                )}
                {isOpen && (
                    <span className="text-sm font-medium">
            {isDark ? "Светлая тема" : "Темная тема"}
          </span>
                )}
            </button>
        </div>
    );
};