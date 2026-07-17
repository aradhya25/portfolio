import React from "react";
import data from "../data/data.json";

const Internships = () => {
  const { internships } = data.data;

  return (
    <section className="px-2" id="internships">
      <div className="container project-div">
        <div className="title">
          <p>Internship</p>
        </div>

        {internships.map((item, index) => (
          <div
            className="card border-0 shadow-lg mb-4 p-4"
            style={{
              borderRadius: "18px",
              background: "#2b2b36"
            }}
            key={index}
          >
            <div className="d-flex justify-content-between align-items-start flex-wrap">

              <div>
                <span
                  className="badge px-3 py-2 mb-3"
                  style={{
                    background: "#6c63ff",
                    fontSize: "13px"
                  }}
                >
                  Internship
                </span>

                <h2
                  style={{
                    fontWeight: "700",
                    marginBottom: "6px"
                  }}
                >
                  {item.company}
                </h2>

                <h5
                  style={{
                    color: "#bdbdbd",
                    fontWeight: "500"
                  }}
                >
                  {item.role}
                </h5>
              </div>

              <div className="text-end">
                <div style={{ fontWeight: "600" }}>
                  📅 {item.duration}
                </div>

                <div
                  style={{
                    color: "#bdbdbd"
                  }}
                >
                  📍 {item.location}
                </div>
              </div>
            </div>

            <hr
              style={{
                borderColor: "#555",
                margin: "20px 0"
              }}
            />

            <p
              style={{
                lineHeight: "1.8",
                color: "#d6d6d6"
              }}
            >
              {item.description}
            </p>

            <div className="mt-3">
              <ul
                style={{
                  lineHeight: "2",
                  color: "#d6d6d6",
                  paddingLeft: "20px"
                }}
              >
                <li>Developed SQL queries for efficient data retrieval and reporting.</li>
                <li>Maintained relational databases and validated business data.</li>
                <li>Worked with enterprise database management practices.</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;