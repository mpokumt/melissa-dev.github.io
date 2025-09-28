interface FooterProps {
    isDark: boolean;
}

export const Footer = ({ isDark }: FooterProps) => {
    return (
        <div
            className={`text-center tracking-wide  ${
                isDark ? "text-gray-400" : "text-gray-900 bg-gray-50"
            } text-xs py-2`}
        >
            <p>© {new Date().getFullYear()} Melissa Adu-Poku. All rights reserved 💙</p>
        </div>
    );
};
