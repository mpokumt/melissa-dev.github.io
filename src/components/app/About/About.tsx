import { IconCode } from "@tabler/icons-react";
import { motion } from "motion/react";

interface SkillInfo {
    name: string;
    url: string;
}

interface AboutProps {
    isDark: boolean;
}

export const About = ({ isDark }: AboutProps) => {
    const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
    const skillCategories: SkillInfo[] = [
        { name: "TypeScript", url: "typescript/typescript-original.svg" },
        { name: "React", url: "react/react-original.svg" },
        { name: "JavaScript", url: "javascript/javascript-original.svg" },
        { name: "Next.js", url: "nextjs/nextjs-original.svg" },
        { name: "Vite.js", url: "vitejs/vitejs-original.svg" },
        { name: "HTML", url: "html5/html5-original.svg" },
        { name: "CSS", url: "css3/css3-original.svg" },
        { name: "TailwindCSS", url: "tailwindcss/tailwindcss-original.svg" },
        { name: "Python", url: "python/python-original.svg" },
        { name: "Java", url: "java/java-original.svg" },
        { name: "Node.js", url: "nodejs/nodejs-original.svg" },
        { name: "Django", url: "django/django-plain.svg" },
        { name: "MySQL", url: "mysql/mysql-original.svg" },
        { name: "PostgreSQL", url: "postgresql/postgresql-original.svg" },
        { name: "MongoDB", url: "mongodb/mongodb-original.svg" },
        { name: "Git", url: "git/git-original.svg" },
        { name: "GraphQL", url: "graphql/graphql-plain.svg" },
        { name: "Docker", url: "docker/docker-original.svg" },
        { name: "Kubernetes", url: "kubernetes/kubernetes-original.svg" },
        { name: "Jenkins", url: "jenkins/jenkins-original.svg" },
        { name: "GHActions", url: "githubactions/githubactions-original.svg" },
        { name: "Storybook", url: "storybook/storybook-original.svg" },
        { name: "Jest", url: "jest/jest-plain.svg" },
        { name: "Cypress", url: "cypressio/cypressio-original.svg" }
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
                    <div className="mb-10">
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
                            <p className="mb-1">
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

                    <div className="mt-10 flex justify-center flex-col items-center">
                        <p
                            className={`text-lg font-medium mb-10 ${
                                isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            Technologies I've Worked With
                            <IconCode className="inline-block ml-2 mb-1 text-teal-400" />
                        </p>

                        <div className="grid center md:grid-cols-6 gap-8">
                            {skillCategories.map((skill: SkillInfo) => (
                                <div
                                    key={skill.name}
                                    className={`p-4 pb-0 rounded-2xl transition-all duration-300 hover:scale-101 w-25 h-25 justify-items-center ${
                                        isDark
                                            ? "bg-gray-800/50 border border-gray-700/50 hover:border-teal-300/30 hover:bg-gray-900 shadow-xl hover:shadow-2xl"
                                            : "bg-gray-50 border border-gray-200 hover:border-teal-200 shadow-md hover:shadow-xl"
                                    } backdrop-blur-sm`}
                                >
                                    <img
                                        src={`${baseUrl}${skill.url}`}
                                        height={45}
                                        width={45}
                                        alt={`A tile displaying ${skill.name} logo`}
                                    />
                                    <p
                                        className={`text-sm font-light mt-2 ${
                                            isDark ? "text-gray-300" : "text-gray-600"
                                        }`}
                                    >
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
