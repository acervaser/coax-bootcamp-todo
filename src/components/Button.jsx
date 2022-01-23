import React from "react";
const style = {
color: "red",
backgroundColor:"aquamarine"
}
const Button = ({ children }) => {
    return <button style={style}>{children}</button>
}
export default Button