async function get (url) {
    const response = await fetch(url);
    return response.json();
}

export default { get };