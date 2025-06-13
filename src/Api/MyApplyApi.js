export const myApplyPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/registrations?email=${email}`, {
    headers: {
      Authorization : `Bearer ${accessToken}`
    }
  })
  .then(res => res.json());
};