export const myMarathonPromise = (email) => {
    return fetch(`http://localhost:3000/`).then(res => res.json());
}