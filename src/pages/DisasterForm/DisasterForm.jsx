import React, { useState } from 'react';
import './DisasterForm.css';

function DisasterForm({ toggleForm }) {
    const [formData, setFormData] = useState({
        date: "",
        location: "",
        casualties: "",
        incident_type: "",
        incident_report: ""
    });
    const [loading, setLoading] = useState(false); // State to manage loading status

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form is submitted
        try {
            const response = await fetch('http://localhost:8000/submit_incident', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // If the response is OK, you can do something here like displaying a success message
                console.log("Incident data submitted successfully");
            } else {
                // Handle the error
                console.error("Failed to submit incident data");
            }
        } catch (error) {
            console.error("Error occurred while submitting incident data:", error);
        }
        setLoading(false); // Set loading to false after response is received
    };

    return (
        <div className='disasterform'>
            <div onClick={toggleForm} className='closeBtn'>
                <i>&times;</i>
            </div>

            <h1>Input Disaster</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="col">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="location">Location</label> <br />
                        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
                    </div>
                </div>

                <div className="col">
                    <div>
                        <label htmlFor="casualties">Casualties</label>
                        <input type="text" id="casualties" name="casualties" value={formData.casualties} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="incident_type">Select Incident</label> <br />
                        <select name="incident_type" value={formData.incident_type} onChange={handleChange} required>
                            <option value="earthquake">Earthquake</option>
                            <option value="flood">Flood</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                </div>

                <div>
                    {/* Incident report */}
                    <label htmlFor="incident_report">Incident Report</label> <br />
                    <textarea name="incident_report" id="incident_report" value={formData.incident_report} onChange={handleChange} cols="30" rows="7" required></textarea>
                </div>

                <br />
                <div>
                    {loading ? (
                        <button style={{ backgroundColor: "var(--primary)", color: "white" }} disabled>Loading...</button>
                    ) : (
                        <input style={{ backgroundColor: "var(--primary)", color: "white" }} type="submit" value="Submit incident" />
                    )}
                </div>
            </form>
        </div>
    );
}

export default DisasterForm;
