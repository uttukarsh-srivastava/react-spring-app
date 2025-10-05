import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const UndergraduatePrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all programs on load
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/programs")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched programs:", data); // Debug log
        setPrograms(data);
        setFilteredPrograms(data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching programs:", err);
        setError("Failed to fetch programs");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Generic fetch by ID
  const fetchProgramById = (id) => {
    return fetch(`http://localhost:8080/api/programs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Program with ID ${id} not found`);
        }
        return res.json();
      });
  };

  // Clear all searches and show all programs
  const clearFilters = () => {
    setSearchId("");
    setSearchName("");
    setSelectedProgram("");
    setFilteredPrograms(programs);
    setError("");
  };

  // 🔎 Search by ID
  const handleSearchById = () => {
    if (!searchId.trim()) {
      alert("Please enter a Program ID");
      return;
    }
    
    setError("");
    fetchProgramById(searchId.trim())
      .then((data) => {
        setFilteredPrograms([data]);
        setSelectedProgram("");
        setSearchName("");
      })
      .catch((err) => {
        console.error("Search by ID error:", err);
        setError(err.message);
        setFilteredPrograms([]);
      });
  };

  // 🔎 Search by Name
  const handleSearchByName = () => {
    if (!searchName.trim()) {
      alert("Please enter a Program Name");
      return;
    }
    
    setError("");
    fetch(`http://localhost:8080/api/programs/search?name=${encodeURIComponent(searchName.trim())}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`No programs found with name containing "${searchName}"`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Search results:", data); // Debug log
        setFilteredPrograms(Array.isArray(data) ? data : [data]);
        setSelectedProgram("");
        setSearchId("");
      })
      .catch((err) => {
        console.error("Search by name error:", err);
        setError(err.message);
        setFilteredPrograms([]);
      });
  };

  // 🔽 Dropdown selection
  const handleDropdownChange = (e) => {
    const id = e.target.value;
    setSelectedProgram(id);
    setSearchId("");
    setSearchName("");
    setError("");

    if (!id) {
      setFilteredPrograms(programs);
    } else {
      fetchProgramById(id)
        .then((data) => {
          setFilteredPrograms([data]);
        })
        .catch((err) => {
          console.error("Dropdown selection error:", err);
          setError(err.message);
          setFilteredPrograms([]);
        });
    }
  };

  // Handle Enter key press for search inputs
  const handleKeyPress = (e, searchFunction) => {
    if (e.key === 'Enter') {
      searchFunction();
    }
  };

  if (loading) {
    return (
      <div className="course-programs">
        <h2 className="u-title">Programs we offer</h2>
        <p>Loading programs...</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="course-programs">
      <h2 className="u-title">Programs we offer</h2>

      {error && (
        <div style={{ 
          backgroundColor: "#ffebee", 
          color: "#c62828", 
          padding: "10px", 
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ef5350"
        }}>
          {error}
        </div>
      )}

      {/* Clear Filters Button */}
      <div style={{ marginBottom: "20px" }}>
        <button 
          onClick={clearFilters}
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Show All Programs
        </button>
      </div>

      {/* Dropdown */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="program-select">Select Program: </label>
        <select 
          id="program-select"
          value={selectedProgram} 
          onChange={handleDropdownChange}
          style={{
            padding: "8px",
            marginLeft: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">All Programs</option>
          {programs.map((p) => (
            <option key={p.id} value={p.id}>
              {p.program} (ID: {p.id})
            </option>
          ))}
        </select>
      </div>

      {/* Search by ID */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Program ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, handleSearchById)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
        <button 
          onClick={handleSearchById}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Search by ID
        </button>
      </div>

      {/* Search by Name */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Program Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, handleSearchByName)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
        <button 
          onClick={handleSearchByName}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Search by Name
        </button>
      </div>

      {/* Programs List */}
      <div>
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="pro-link"
              style={{ 
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9"
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <p style={{ margin: "5px 0" }}>
                  <b>ID:</b> {program.id}
                </p>
                <p style={{ margin: "5px 0" }}>
                  <b>Program:</b> {program.program}
                </p>
                <p style={{ margin: "5px 0" }}>
                  <b>Certification:</b> {program.certification}
                </p>
                {program.duration && (
                  <p style={{ margin: "5px 0" }}>
                    <b>Duration:</b> {program.duration}
                  </p>
                )}
                {program.faculty && (
                  <p style={{ margin: "5px 0" }}>
                    <b>Faculty:</b> {program.faculty}
                  </p>
                )}
              </div>
              

            </div>
          ))
        ) : (
          <div style={{ 
            textAlign: "center", 
            padding: "40px", 
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            color: "#6c757d"
          }}>
            <p>No programs found</p>
            {(searchId || searchName || selectedProgram) && (
              <button 
                onClick={clearFilters}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Show All Programs
              </button>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default UndergraduatePrograms;