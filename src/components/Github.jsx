import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/itsrajcode')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github followers: {data.followers}
      <div className="flex items-center justify-center flex-col mt-6">
        <img
          className="rounded-full"
          src={data.avatar_url}
          alt="Git picture"
          width={200}
        />
        <h2 className="mt-2">Name : {data.name}</h2>
        <h2 className="mt-2">Location : {data.location}</h2>
        <h2 className="mt-2">Public Repo : {data.public_repos}</h2>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/itsrajcode");
  return response.json();
};
