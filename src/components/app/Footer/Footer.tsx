interface FooterProps {
    isDark: boolean;
}

export const Footer = ({ isDark }: FooterProps) => {
    return (
        <div
            className={`text-center tracking-wide font-light ${
                isDark ? "text-gray-400" : "text-gray-900 bg-gray-50"
            } text-sm py-5`}
        >
            <p>© {new Date().getFullYear()} Melissa Adu-Poku. All rights reserved 💙</p>
        </div>
    );
};
