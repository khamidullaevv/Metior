import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Импортируем наши новые компоненты
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Sidebar } from "./components/Sidebar";
import { ChatInterface } from "./components/ChatInterface";

export default function App() {
    // Управление экранами: 'welcome' | 'chat'
    const [screen, setScreen] = useState<"welcome" | "chat">("welcome");

    // Управление темой (по умолчанию темная)
    const [isDark, setIsDark] = useState(true);

    // Эффект для применения темы к <html>
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        // Базовый контейнер приложения
        <div className="h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">

            {/* AnimatePresence обеспечивает плавные анимации при монтировании/демонтировании */}
            <AnimatePresence mode="wait">

                {screen === "welcome" ? (
                    // Экран приветствия
                    <WelcomeScreen key="welcome" onStart={() => setScreen("chat")} />
                ) : (
                    // Основной макет чата (Sidebar + Главная область)
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="h-full w-full flex relative"
                    >
                        <Sidebar isDark={isDark} toggleTheme={toggleTheme} />
                        <ChatInterface />
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}