import React from 'react';
import {dashboardData} from "/pages/index"
import {Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";

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
                    <div className="system-logs-card">
                        {dashboardData.system_logs.map(log =>
                            <div className="system-log-instance" key={log.log_type + log.log_date}>
                                <FontAwesomeIcon icon={faCircle} color="#6B7280"/>
                                <span className="system-log-instance-msg">{log.log_type}</span>
                                <span className="system-log-instance-date">{log.log_date}</span>
                            </div>
                        )}
                        <div className="system-log-instance">
                            <FontAwesomeIcon icon={faCircleNotch} color="#6B7280"/>
                            <span className="system-log-instance-msg">View all</span>
                        </div>
                    </div>
                </div>
                <div className="new-tickets-container">
                    <div className="new-tickets-title">NEW TICKETS</div>
                    <div className="new-tickets-card">
                        {dashboardData.tickets.map(ticket =>
                            <div className="ticket" key={ticket.customer_name + ticket.ticket_date + ticket.message}>
                                <FontAwesomeIcon icon={faUserCircle} color="#6B7280"/>
                                <span className="ticket-customer-name">{ticket.customer_name}</span>
                                <span className="ticket-date">{ticket.ticket_date}</span>
                                <div className="ticket-msg">{ticket.message}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visitors;