import type { Icon, IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavItemInfo {
    id: string;
    label: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}

interface NavItemProps {
    navItem: NavItemInfo;
    handleScrollToSection: (sectionId: string) => void;
    activeSection: string;
    isDark: boolean;
}

export const NavItem = ({
    handleScrollToSection,
    activeSection,
    isDark,
    navItem
}: NavItemProps) => {
    const handleOnClick = () => {
        handleScrollToSection(navItem.id);
    };

    return (
        <button
            key={navItem.id}
            onClick={handleOnClick}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeSection === navItem.id
                    ? isDark
                        ? "bg-teal-500/20 text-teal-400 shadow-lg shadow-teal-500/20"
                        : "bg-teal-100 text-teal-700 shadow-lg shadow-teal-200/50"
                    : isDark
                    ? "text-gray-300 hover:text-teal-400 hover:bg-white/5"
                    : "text-gray-600 hover:text-teal-600 hover:bg-black/5"
            }`}
        >
            <navItem.icon className="w-4 h-4" />
            <span className="text-md font-medium tracking-wide">{navItem.label}</span>
        </button>
    );
};
