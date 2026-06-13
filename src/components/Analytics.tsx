import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface AnalyticsProps {
    analytics: {
        visitors: number;
        aiChats: number;
        resumeDownloads: number;
    };
}
export function Analytics({ analytics }: AnalyticsProps) {

    return (
        <section className="analytics-section">
            <div className="analytics-header">
                <h2>Live Analytics</h2>
                <p>Real-time portfolio engagement metrics</p>
            </div>
            <div className="analytics-grid">

                <motion.div initial={{
                    opacity: 0,
                    y: 40
                }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    whileHover={{
                        y: -10,
                        scale: 1.03
                    }}
                    className="analytics-card">
                    <span className="analytics-value">
                        {analytics.visitors}
                    </span>

                    <span className="analytics-label">
                        Visitors
                    </span>
                </motion.div>

                <motion.div initial={{
                    opacity: 0,
                    y: 40
                }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    whileHover={{
                        y: -10,
                        scale: 1.03
                    }}
                    className="analytics-card">
                    <span className="analytics-value">
                        {analytics.aiChats}
                    </span>

                    <span className="analytics-label">
                        AI Chats
                    </span>
                </motion.div>

                <motion.div initial={{
                    opacity: 0,
                    y: 40
                }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    whileHover={{
                        y: -10,
                        scale: 1.03
                    }}
                    className="analytics-card">
                    <span className="analytics-value">
                        {analytics.resumeDownloads}
                    </span>

                    <span className="analytics-label">
                        Resume Downloads
                    </span>
                </motion.div>

            </div>
        </section>
    );
}