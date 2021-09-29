import React from 'react';
import {dashboardData} from "/pages/index"
import {Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';

const getRandomInt = max => Math.floor(Math.random() * max);

const formatDataForChart = object => {
    let chartData = [];
    let keys = Object.keys(object);
    for (let key of keys) {
        chartData.push({
            day: key,
            INBOUND: object[key],
            OUTBOUND: getRandomInt(object[key]) + 1
        })
    }
    return chartData;
};

const Visitors = () => {
    const chartData = formatDataForChart(dashboardData.weekly_visitors);
    return (
        <div>
            <div className="visitors-container-grid">
                <div className="unique-visitors-container visitors-data-card">
                    <span className="visitors-data-card-title">UNIQUE VISITORS</span>
                    <span className="visitors-data-card-desc">Visitors in the current month</span>
                    <span className="visitors-data-card-count"><b>{dashboardData.unique_visitors}</b></span>
                </div>
                <div className="load-time-container visitors-data-card">
                    <span className="visitors-data-card-title">LOAD TIME</span>
                    <span className="visitors-data-card-desc">Average page load time</span>
                    <span className="visitors-data-card-count"><b>{dashboardData.load_time}</b></span>
                </div>
                <div className="new-issues-container visitors-data-card">
                    <span className="visitors-data-card-title">NEW ISSUES</span>
                    <span className="visitors-data-card-desc">System incidents and alerts</span>
                    <span className="visitors-data-card-count"><b>{dashboardData.issues}</b></span>
                </div>
                <div className="weekly-visitors-graph">
                    <div className="weekly-visitors-graph-title">WEEKLY VISITORS</div>
                    <div className={"weekly-visitors-graph-container"}>
                        <ResponsiveContainer width={"100%"} height={"100%"}>
                            <BarChart data={chartData}>
                                <XAxis dataKey={"day"}/>
                                <Bar dataKey={"INBOUND"} stackId={"a"} fill={"#6B7280"}/>
                                <Bar dataKey={"OUTBOUND"} stackId={"a"} fill={"#D1D5DB"}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bandwidth-graph">
                    <div className="bandwidth-graph-title">INBOUND/OUTBOUND BANDWIDTH</div>
                    <div className="bandwidth-graph-container">
                        <ResponsiveContainer width={"100%"} height={"100%"}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="0" vertical={false}/>
                                <XAxis dataKey="name"/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="INBOUND" stroke="#6B7280"/>
                                <Line type="monotone" dataKey="OUTBOUND" stroke="#D1D5DB"/>
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                </div>
                <div className="system-logs-container">
                    <div className="system-logs-title">SYSTEM LOG</div>
                    <div className="system-logs-card"></div>
                </div>
                <div className="new-tickets-container">
                    <div className="new-tickets-title">NEW TICKETS</div>
                    <div className="new-tickets-card"></div>
                </div>
            </div>
        </div>
    );
};

export default Visitors;