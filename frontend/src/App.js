import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import sample from "./sample.json";
import initial from "./initial.json";
import EmailEditor from 'react-email-editor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      start: ""
    };
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <button onClick={this.exportHtml}>Export HTML</button>
            &nbsp;
            <button onClick={this.saveDesign}>Save Design</button>
            &nbsp;
            <button onClick={this.loadInitial}>Load Initial Design</button>
            &nbsp;
            <button onClick={this.load}>Load Design</button>
            &nbsp;
            <button onClick={this.save}>Save</button>
            &nbsp;
            <button onClick={this.download}>Download</button>
          </div>
          <EmailEditor ref={editor => (this.editor = editor)} />
        </div>
      </div>
    );
  }

  loadInitial = () => {
    this.editor.loadDesign(initial);
  };

  load = () => {
    this.editor.loadDesign(sample);
  };

  save = () => {
    this.editor.saveDesign(design => {
      sample = design;
      sample.id = "1234566789";
      this.setState({ start: sample });
      console.log("saveDesign:", sample);
      //this.setState({start:design})
      //alert("Design JSON has been logged in your developer console.")
    });
  };

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log("saveDesign", design);
      this.setState({ start: design });
      alert("Design JSON has been logged in your developer console.");
    });
  };
}

export default App;
