import React from 'react';

const Iframe = ({
	url = ""
}) => {
	return <iframe src={url} ></iframe>
}

export default Iframe;