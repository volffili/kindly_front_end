import React, {useEffect} from "react"

export default (props) => {

    useEffect(() => {
        console.log('Viewing request with ID = ', props.match.params.request_id)
    }, []);

    return <div>
        Details works
    </div>
}

