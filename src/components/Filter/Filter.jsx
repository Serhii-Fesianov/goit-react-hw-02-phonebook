export const Filter = ({ handleChangeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleChangeFilter} />
    </>
  );
};
