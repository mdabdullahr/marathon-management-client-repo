import useAxiosSecure from "../Hooks/useAxiosSecure";

const useMyApply = () => {
  const axiosSecure = useAxiosSecure();

  const myApplyPromise = (email, searchText) => {
    console.log(searchText);
    return axiosSecure
      .get(`registrations?email=${email}&search=${searchText}`)
      .then((res) => res.data);
  };

  const updateMyApplyPromise = (id, updateData) => {
    return axiosSecure.patch(`registrations/${id}`, updateData);
  };

  const deleteMyApplyPromise = (id) => {
    return axiosSecure.delete(`registrations/${id}`);
  };
  return {
    myApplyPromise,
    updateMyApplyPromise,
    deleteMyApplyPromise,
  };
};

export default useMyApply;
