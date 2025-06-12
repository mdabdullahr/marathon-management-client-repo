export const myMarathonPromise = (email) => {
    return fetch(`http://localhost:3000/marathons?email=${email}`).then(res => res.json());
}