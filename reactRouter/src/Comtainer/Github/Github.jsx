import React, { useEffect, useState } from "react";


import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData();

    // const [data, setdata] = useState([]);



    // useEffect(() => {
    // fetch('https://api.github.com/users/arvind-ishi')
    // .then(Response => Response.json())
    // .then(data => {
    // console.log(data);

    // setdata(data)
    // })

    // }, [])
    return (
        <div className="  bg-gray-700 text-2xl text-green-300 m-4 text-center rounded p-4  ">
            Github followers :   {data.followers}
            <div className=" bg-orange-700 text-blue-800 rounded p-4">
                following :
                <span className="text-green-700">
                    {data.following}
                </span>
            </div>

            <div>
                repositories:{data.public_repos}
            </div>
            <div className="flex justify-center">
                <img src={data.avatar_url} alt="image" width={300} />
            </div>
            <div >
                name:
                <span className=" text-orange-400 text-3xl">{data.name}</span>
            </div>
            <div>
                bIO data : {data.bio}
            </div>


        </div>
    )
}

export default Github;


export const githubinfo = async () => {
    const response = await fetch('https://api.github.com/users/arvind-ishi')
    return response.json()
}