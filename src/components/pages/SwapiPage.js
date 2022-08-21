import { useEffect, useState } from "react";

export default function SwapiPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [swapiData, setSwapiData] = useState([]);
  const [subsection, setSubsection] = useState("");
  const [section, setSection] = useState("");
  const [categoryCounts, setCategoryCounts] = useState([]);
  const finalUrl = `https://www.swapi.tech/api/${section}/${subsection}`;

  useEffect(() => {
    fetch("https://www.swapi.tech/count/all")
      .then((res) => res.json())
      .then((data) => {
        setCategoryCounts(data.counts);
      })
      .then(() => setIsLoading(false))
      .catch(console.error);
  }, []);

  const renderCategories = () => {
    return Object.keys(categoryCounts).map((data, idx) => {
      return (
        <option value={section === "films" ? null : data} key={idx}>
          {data && data[0].toUpperCase() + data.slice(1)}
        </option>
      );
    });
  };

  useEffect(() => {
    if (section && categoryCounts && section !== "films") {
      if (section === "films") {
        fetch(
          `https://www.swapi.tech/api/${section}?page=1&limit=${categoryCounts.section}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSwapiData(data.result);
          })
          .catch(console.error);
      } else {
        fetch(
          `https://www.swapi.tech/api/${section}?page=1&limit=${categoryCounts.section}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSwapiData(data.results);
          })
          .catch(console.error);
      }
    }
  }, [section, categoryCounts]);

  const renderSwapiData = () => {
    return (
      <select onChange={(e) => setSubsection(e.target.value)}>
        {swapiData.map((data, idx) => {
          console.log("film data", data);

          return (
            <option value={data.uid} key={idx}>
              {section === "films" ? data?.properties.title : data.name}
            </option>
          );
        })}
      </select>
    );
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="swapi-container">
      <div className="swapi-wrapper">
        <div className="swapi-header">
          <h1>Search SWAPI</h1>
        </div>

        <div className="search-wrapper">
          <select onChange={(e) => setSection(e.target.value)}>
            <option value="" selected disabled>
              Default
            </option>
            {renderCategories()}
          </select>

          {section.length > 0 ? renderSwapiData() : null}
        </div>

        <a
          className="get-json-btn"
          href={finalUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get JSON
        </a>
      </div>
    </div>
  );
}
