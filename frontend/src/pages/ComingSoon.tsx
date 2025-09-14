import Navigation from "@/components/Navigation";
import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100 flex flex-col">
            <Navigation />

            <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
                <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Rocket className="w-12 h-12 text-yellow-600" />
                    <h1 className="pb-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-slate-700 bg-clip-text text-transparent">
                        Coming Soon
                    </h1>
                </motion.div>
                <motion.p
                    className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    We’re building something amazing — launching soon!
                </motion.p>

                {/* Email Subscribe */}
                <motion.div
                    className="w-full max-w-md flex items-center bg-white rounded-full shadow-lg p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-l-full outline-none text-gray-700"
                    />
                    <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 transition text-white rounded-full font-medium">
                        Notify Me
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ComingSoon;
