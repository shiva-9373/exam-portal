import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: [],
      index: 0,
      note: "",
      color: "#ffffff",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChange(event) {
    this.setState({ note: event.target.value });
   
  }
  handleChangeColor(event) {
    this.setState({ color: event.target.value });
  }

  handleSubmit = () => {
    
    const array = this.state.newNote;
    array.push([this.state.note,this.state.color]);
    this.setState({ newNote: array, note: "",color: "#ffffff" });
    console.log(this.state.newNote)
  };

  handleDelete = (event) => {
    const array = [...this.state.newNote];
    array.splice(event.target.id, 1);
    this.setState({ newNote: array });
    
    this.renderList();
  };
  handleEdit = (event) => {
    console.log("edit ");
  };

  renderList = () => {
    
    const renderArray = this.state.newNote.map((prev) => {
      return (
        <div className=" card card text-white bg-dark mb-3 border-danger" style={{ width: "12rem",
        border:"5px solid "
       }}>
          <div className="card-body">
           
            <p className="card-text"
            style={{ 
            color:prev[1] }}>👉🏼{" "+prev[0]}</p>
          </div>
          <button className="btn btn-outline-danger"
            onClick={this.handleDelete}
            id={this.state.newNote.indexOf(prev)}
          >
           ❌
          </button>
       
        </div>
      );
    });

    return renderArray;
  };

  render() {
    
    return (
      <div className="container">
        <div class="form-outline">
        <input
          className=" input1 form-control form-control-outline-success"
          type="text"
          value={this.state.note}
          onChange={this.handleChange}
        />
          <label class="form-label" for="typeText">Write Here</label>
        </div>
   
        <input
          type="color"
          class="form-control form-control-color border-danger bg-black"
          id="exampleColorInput"
          value={this.state.color}
          onChange={this.handleChangeColor}
          title="Choose your color"
        />
        <button className="btn btn-outline-success"onClick={this.handleSubmit}>Submit🎯</button>
        <div className=" body1  d-flex flex-row bd-highlight mb-3">{this.renderList()}</div>
      </div>
    );
  }
}

export default Input;
