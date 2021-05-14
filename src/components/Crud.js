import React from "react";

const Crud = () => {
  const [state, setState] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setState([...state, { name: input }]);
  };

  const handleDelete = (i) => {
    const data = [...state];
    data.splice(i, 1);
    setState(data);
  };
  const handleUpdate = (i) => {
    const update = [...state];
    update[i].name = input;
    setState(update);
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => handleAdd(e)}>
          <div className="form-group d-flex">
            <label for="exampleInputEmail1">Name:</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
            />
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th className="float-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td className="float-right">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdate(i)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
