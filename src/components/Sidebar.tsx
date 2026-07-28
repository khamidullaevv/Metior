import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Settings, Sparkles, Camera, Key, Sidebar as SidebarIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDark, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.aside
            animate={{ width: isOpen ? 260 : 70 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-3 z-20"
        >
            <div>
                {/* Хедер сайдбара с лого и кнопкой сворачивания */}
                <div className="flex items-center justify-between p-2 mb-6 h-10">
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2.5"
                        >
                            <Sparkles className="w-7 h-7 text-amethyst-500" />
                            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-amethyst-400 to-amethyst-600">
                Metior
              </span>
                        </motion.div>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                    >
                        <SidebarIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col gap-1.5">
                    <SidebarItem icon={MessageSquare} label="Чат с ИИ" active isOpen={isOpen} />
                    <SidebarItem icon={Camera} label="Скриншот экрана" isOpen={isOpen} />
                    <SidebarItem icon={Key} label="API Ключи" isOpen={isOpen} />
                    <SidebarItem icon={Settings} label="Настройки" isOpen={isOpen} />
                </nav>
            </div>

            {/* Кнопка темы внизу */}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} isOpen={isOpen} />
        </motion.aside>
    );
};

// Вспомогательный под-компонент (только для этого файла)
interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    active?: boolean;
    isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, isOpen }) => {
    return (
        <button
            className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all group ${
                active
                    ? "bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
            } ${!isOpen && "justify-center"}`}
        >
            <Icon className={`w-5 h-5 ${active ? "text-amethyst-500" : "text-slate-500 group-hover:text-amethyst-400"}`} />
            {isOpen && <span>{label}</span>}
        </button>
    );
};