import React, { useEffect } from "react"

export default (props) => {
  useEffect(() => {}, [])

  return (
    <div
      style={{
        marginTop: "8%",
        width: "50%",
        marginLeft: "25%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {props.header}
      </h2>
      <div
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {props.textRows.map((textRow) => (
          <p>{textRow}</p>
        ))}
      </div>
    </div>
  )
}
