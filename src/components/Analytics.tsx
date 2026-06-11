import { useEffect, useState } from "react";
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
            <h2>Live Analytics</h2>

            <div className="analytics-grid">

                <div className="analytics-card">
                    <span className="analytics-value">
                        {analytics.visitors}
                    </span>

                    <span className="analytics-label">
                        Visitors
                    </span>
                </div>

                <div className="analytics-card">
                    <span className="analytics-value">
                        {analytics.aiChats}
                    </span>

                    <span className="analytics-label">
                        AI Chats
                    </span>
                </div>

                <div className="analytics-card">
                    <span className="analytics-value">
                        {analytics.resumeDownloads}
                    </span>

                    <span className="analytics-label">
                        Resume Downloads
                    </span>
                </div>

            </div>
        </section>
    );
}