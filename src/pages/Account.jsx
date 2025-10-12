import React, { useMemo, useState } from "react";
import "./subpages.css";

function useProfile() {
	return useMemo(() => {
		try { const raw = localStorage.getItem("asc_user_profile"); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
	}, []);
}

export default function Account() {
	const profile = useProfile();
	const [email, setEmail] = useState(profile.email || "");
	const [phone, setPhone] = useState(profile.phone || "");

	function save() {
		const next = { ...profile, email, phone };
		localStorage.setItem("asc_user_profile", JSON.stringify(next));
		alert("Account updated");
	}

	return (
		<div className="page-shell">
			<div className="grid-2">
				<div className="card form">
					<h3>Contact Details</h3>
					<label>
						<span>Email</span>
						<input value={email} onChange={(e)=>setEmail(e.target.value)} />
					</label>
					<label>
						<span>Phone</span>
						<input value={phone} onChange={(e)=>setPhone(e.target.value)} />
					</label>
					<div className="actions"><button className="btn primary" onClick={save}>Save</button></div>
				</div>
				<div className="card preview">
					<h3>Profile Preview</h3>
					<div className="preview-body">
						<div className="avatar-lg">{profile.image1 && <img src={profile.image1} alt="avatar" />}</div>
						<div className="kv"><span>Name</span><strong>{profile.fullName || '—'}</strong></div>
						<div className="kv"><span>Dept</span><strong>{profile.department || '—'}</strong></div>
						<div className="kv"><span>Sem</span><strong>{profile.semester || '—'}</strong></div>
					</div>
				</div>
			</div>
		</div>
	);
}