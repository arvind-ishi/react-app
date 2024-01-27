import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userid} = useParams();
    return(
<div className=" bg-gray-800 text-orange-700 text-center rounded p-4 text-xl">
    User :{userid}
</div>

    )
};

export default User;
