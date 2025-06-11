export const myApplyPromise = (email) => {
  return fetch(`http://localhost:3000/registrations?email=${email}`).then(res => res.json());
};