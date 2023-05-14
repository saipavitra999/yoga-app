import React, { useEffect, useState } from "react";

function YogaClassPage() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/yoga-types")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="bg">
      {typeof backendData.yogaTypes === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.yogaTypes.map((type, i) => (
          <p className="sub" key={i}>
            {type}
          </p>
        ))
      )}
    </div>
  );
}

export default YogaClassPage;
