import React from "react";
import "./subpages.css";

export default function Home() {
	return (
		<div className="page-shell">
			<section className="hero">
				<h1>Welcome to AI Smart Classroom</h1>
				<p>Track attendance automatically, manage academics, and stay informed — all in one place.</p>
				<div className="cta-row">
					<a className="btn primary" href="/dashboard">View Profile</a>
					<a className="btn ghost" href="/notifications">See Notifications</a>
				</div>
			</section>

			<section className="cards">
				<div className="card stat">
					<h3>Attendance</h3>
					<p>Face-based recognition keeps your attendance accurate and effortless.</p>
				</div>
				<div className="card stat">
					<h3>Academics</h3>
					<p>Access timetables, exams, and results with a modern, unified dashboard.</p>
				</div>
				<div className="card stat">
					<h3>Community</h3>
					<p>Get updates and alerts from your college, in real time.</p>
				</div>
			</section>
		</div>
	);
}