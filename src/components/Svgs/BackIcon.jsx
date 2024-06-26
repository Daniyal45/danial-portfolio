import React from "react";

function BackIcon(props) {
    return (
        <svg
            fill="currentColor"
            {...props}
            viewBox="0 0 512 512"
            style={{ display: "inline-block", verticalAlign: "middle" }}
        >
            <path
                d="M256,0C114.562,0,0,114.609,0,256s114.562,256,256,256c141.375,0,256-114.609,256-256S397.375,0,256,0z M256,472
	c-119.344,0-216.031-96.703-216.031-216S136.656,40,256,40c119.281,0,216,96.703,216,216S375.281,472,256,472z"
            />
            <polygon points="240,160 128,256 240,352 240,304.031 384,304.031 384,208.031 240,208.031 " />
        </svg>
    );
}

export default BackIcon;