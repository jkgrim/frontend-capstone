/* 
TODO:
link to swapi show page
 - url? (api?, custom algorithm)
 - endpoint? (dropdown? (counts api))
*/
import { useEffect, useState } from "react";

export default function SwapiPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [ryanData, setRyanData] = useState([]);
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
    return Object.keys(categoryCounts).map((data) => {
      return (
        <option value={section === "films" ? null : data}>
          {data && data[0].toUpperCase() + data.slice(1)}
        </option>
      );
    });
  };

  useEffect(() => {
    if (section && categoryCounts && section !== "films") {
      // if (section === "films") {
      //   fetch(
      //     `https://www.swapi.tech/api/${section}?page=1&limit=${categoryCounts.section}`
      //   )
      //     .then((res) => res.json())
      //     .then((data) => {
      //       // console.log("ryan results", data.result);
      //       setRyanData(data.result);
      //     })
      //     .catch(console.error);
      // } else {
      fetch(
        `https://www.swapi.tech/api/${section}?page=1&limit=${categoryCounts.section}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("ryan results", data.result);
          setRyanData(data.results);
        })
        .catch(console.error);
    }
    // }
  }, [section, categoryCounts]);

  const renderRyanData = () => {
    return (
      <select onChange={(e) => setSubsection(e.target.value)}>
        {ryanData.map((data, idx) => {
          console.log("film data", data);

          return (
            <option value={data.uid}>
              {section === "films" ? data?.properties.title : data.name}
            </option>
          );
        })}
      </select>
    );
  };

  // const fetchCategoryResults = (value) => {
  //   setSection(value);

  //   console.log(section);
  //   fetch(
  //     `https://www.swapi.tech/api/${section}?page=1&limit=${categoryCounts.section}`
  //     // `https://www.swapi.tech/api/people?page=1&limit=82`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("ryan results", data);
  //       setRyanData(data.results);
  //     })
  //     .catch(console.error);
  // };

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
          <select
            // onChange={(e) => fetchCategoryResults(e.target.value)}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="" selected disabled>
              Default
            </option>
            {renderCategories()}
          </select>

          {section.length > 0 ? renderRyanData() : null}
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
