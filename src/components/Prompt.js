
const Prompt = ({ openPromt, onClose, onDelete }) => {

//   if (!openPromt) return null;
  return (
    <div>
      {openPromt && (
        <div className="bg-white w-64 shadow-md shadow-black rounded-md p-2 absolute left-1/2 -translate-x-1/2 top-10">
          <p id="confirmation">Are you sure you want to delete?</p>
          <div id="buttons" className="flex justify-between pt-3 px-2">
            <button className="p-1 bg-gray-100 rounded-md" onClick={onClose}>
              Close
            </button>
            <button id="delete" className="p-1 bg-gray-100 rounded-md" onClick={() => onDelete()}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prompt;
