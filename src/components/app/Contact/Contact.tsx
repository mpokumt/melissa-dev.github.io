import {
    IconArrowUpRightCircle,
    IconBrandGithub,
    IconBrandLinkedin,
    IconCalendarWeekFilled,
    IconMailSpark,
    type Icon,
    type IconProps
} from "@tabler/icons-react";
import { motion } from "motion/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface ContactInfo {
    name: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    href: string;
}

interface ContactProps {
    isDark: boolean;
}

export const Contact = ({ isDark }: ContactProps) => {
    const socialLinks: ContactInfo[] = [
        {
            name: "LinkedIn",
            icon: IconBrandLinkedin,
            href: "https://linkedin.com/in/melissa19"
        },
        {
            name: "GitHub",
            icon: IconBrandGithub,
            href: "https://github.com/mpokumt"
        },
        {
            name: "E-mail",
            icon: IconMailSpark,
            href: "mailto:melissaadupoku@gmail.com"
        },
        {
            name: "Calendar",
            icon: IconCalendarWeekFilled,
            href: "https://cal.com/melpoks"
        }
    ];

    return (
        <section
            id="contact"
            className={`min-h-[85vh] flex items-center justify-center py-20 relative overflow-hidden ${
                isDark ? "bg-gray-900" : "bg-gray-50"
            }`}
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75" />
                <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="mb-16">
                        <h2
                            className={`text-6xl font-bold mb-6 ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Let's build together<span className="text-teal-500">.</span>
                        </h2>
                        <p
                            className={`text-lg font-extralight tracking-wide ${
                                isDark ? "text-gray-200" : "text-gray-600"
                            }`}
                        >
                            Always looking to innovate and build cool and meaningful products and
                            solutions.
                            <br />
                            Whether it's a job opportunity, a project, or just a chat, feel free to
                            reach out so we connect!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto mb-20">
                        {socialLinks.map((social: ContactInfo) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 hover:scale-102 group ${
                                    isDark
                                        ? "bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30"
                                        : "bg-white border border-gray-200 hover:border-teal-300"
                                } shadow-lg hover:shadow-xl`}
                            >
                                <div className="flex items-center gap-3">
                                    <social.icon
                                        className={`w-5 h-5 ${
                                            isDark ? "text-gray-400" : "text-gray-600"
                                        }`}
                                    />
                                    <span
                                        className={`font-medium ${
                                            isDark ? "text-white" : "text-gray-900"
                                        }`}
                                    >
                                        {social.name}
                                    </span>
                                </div>
                                <IconArrowUpRightCircle
                                    className={`hidden md:flex w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                                        isDark ? "text-gray-400" : "text-gray-400"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
