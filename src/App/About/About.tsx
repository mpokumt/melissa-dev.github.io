import { IconCloudCode, IconCode, IconDatabaseCog, IconServerCog } from "@tabler/icons-react";
import { motion } from "motion/react";

interface AboutProps {
    isDark: boolean;
}

export const About = ({ isDark }: AboutProps) => {
    const skillCategories = [
        {
            title: "Languages",
            icon: IconCode,
            skills: ["JavaScript/TypeScript", "Python", "Go"]
        },
        {
            title: "Backend",
            icon: IconServerCog,
            skills: ["Express", "Flask", "GraphQL", "VJS", "WebRTC", "Mux", "Buffalo", "LLMs"]
        },
        {
            title: "Cloud & DevOps",
            icon: IconCloudCode,
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Databases",
            icon: IconDatabaseCog,
            skills: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"]
        }
    ];

    return (
        <section
            id="about"
            className={`min-h-screen flex items-center py-20 relative overflow-hidden ${
                isDark ? "bg-gray-900" : "bg-white"
            }`}
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-32 right-32 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
                <div className="absolute bottom-32 left-32 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150" />
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-16">
                        <h2
                            className={`text-5xl font-bold mb-8 ${
                                isDark ? "text-gray-100" : "text-gray-900"
                            }`}
                        >
                            My Expertise<span className="text-teal-500">.</span>
                        </h2>

                        <div
                            className={`space-y-6 text-lg leading-relaxed max-w-6xl mx-auto font-extralight tracking-wide ${
                                isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            <p>
                                I'm a collaborative, proactive, and passionate software engineer
                                with over 8 years of professional experience building
                                <b className="font-semibold"> intelligent</b> and
                                <b className="font-semibold"> user-friendly</b> web and mobile
                                applications spanning the entire breadth of software engineering,
                                from <b className="font-semibold">frontend</b> to
                                <b className="font-semibold"> backend</b>.
                            </p>

                            <p>
                                My passion lies in creating
                                <b className="font-semibold"> scalable</b> solutions that automate
                                complex workflows, enhance user experiences, and push the boundaries
                                of possibility with modern technology.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <div className="grid md:grid-cols-2 gap-8">
                            {skillCategories.map((category) => (
                                <div
                                    key={category.title}
                                    className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                                        isDark
                                            ? "bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30"
                                            : "bg-gray-50 border border-gray-200 hover:border-teal-300"
                                    } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
                                >
                                    <div className="flex items-center gap-4 mb-6 justify-center">
                                        <div
                                            className={`p-3 rounded-2xl ${
                                                isDark ? "bg-teal-500/20" : "bg-teal-100"
                                            }`}
                                        >
                                            <category.icon
                                                className={`w-6 h-6 ${
                                                    isDark ? "text-teal-400" : "text-teal-600"
                                                }`}
                                            />
                                        </div>
                                        <h4
                                            className={`text-xl font-semibold ${
                                                isDark ? "text-white" : "text-gray-900"
                                            }`}
                                        >
                                            {category.title}
                                        </h4>
                                    </div>

                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                                    isDark
                                                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                                } shadow-md hover:shadow-lg`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
