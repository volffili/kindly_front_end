import React, {useEffect} from "react"

export default (props) => {

    useEffect(() => {
    }, []);

    return <div>
        Looking at details of help request with ID = {props.match.params.request_id}
    </div>
}

