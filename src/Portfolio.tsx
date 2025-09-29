import { IconHome, IconMailSpark, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { About, Contact, Footer, Hero, Navbar } from "./components";
import type { NavItemInfo } from "./components/app/Hero/Navbar/NavItem";

export const Portfolio = () => {
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState("hero");

    const sections: NavItemInfo[] = [
        { id: "hero", label: "Home", icon: IconHome },
        { id: "about", label: "About", icon: IconUser },
        { id: "contact", label: "Contact", icon: IconMailSpark }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: "-20% 0px -20% 0px"
        };

        const observerCallback = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section: NavItemInfo) => {
            const element = document.getElementById(section.id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const handleScrollToSection = (sectionId: string) => {
        scrollToSection(sectionId);
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${
                isDark ? "bg-gray-900" : "bg-white"
            }`}
        >
            <Navbar
                isDark={isDark}
                handleToggleTheme={toggleTheme}
                activeSection={activeSection}
                handleScrollToSection={handleScrollToSection}
                sections={sections}
            />

            <main>
                <Hero isDark={isDark} handleScrollToSection={handleScrollToSection} />
                <About isDark={isDark} />
                <Contact isDark={isDark} />
                <Footer isDark={isDark} />
            </main>
        </div>
    );
};
