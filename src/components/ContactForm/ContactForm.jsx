export const ContactForm = ({ handleChangeInput, handleAddContact }) => {
  return (
    <form>
      <p>Name</p>
      <input
        type="text"
        required
        onChange={event => handleChangeInput(event, true)}
      />
      <p>Number</p>
      <input
        type="tel"
        name="number"
        required
        onChange={event => handleChangeInput(event, false)}
      />
      <button type="submit" onClick={event => handleAddContact(event)}>
        Add contact
      </button>
    </form>
  );
};
