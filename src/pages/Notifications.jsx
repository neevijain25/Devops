import React from "react";
import "./subpages.css";

export default function Notifications() {
	const items = [
		{ id: 1, title: "Timetable Updated", body: "Semester V timetable revised for next week.", time: "10:30 AM" },
		{ id: 2, title: "Exam Form", body: "Submit exam forms by 25th Aug.", time: "Yesterday" },
		{ id: 3, title: "Holiday Notice", body: "College closed on Friday for event.", time: "2 days ago" },
	];
	return (
		<div className="page-shell">
			<div className="card timeline">
				<h3>Notifications</h3>
				<ul>
					{items.map((n) => (
						<li key={n.id}>
							<div className="dot" />
							<div className="content">
								<div className="row">
									<strong>{n.title}</strong>
									<span className="time">{n.time}</span>
								</div>
								<p>{n.body}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}