import React, { Component } from "react";

class SearchForm extends Component {
state = {
    search: ""
};
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="card">
                        <div className="card-header">
                            <strong>
                                <i className="fa fa-list-alt"></i> Search Parameters</strong>
                        </div>
                        <div className="card-body">
                            <form role="form">
                                <div className="form-group">
                                    <label for="search">Search Term:</label>
                                    <input type="text" className="form-control" id="search-term" name="search" onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label for="start-year">Start Year (Optional):</label>
                                    <input type="text" className="form-control" id="start-year " />
                                </div>
                                <div className="form-group">
                                    <label for="end-year">End Year (Optional):</label>
                                    <input type="text" className="form-control" id="end-year" />
                                </div>
                                <button type="submit" className="btn btn-default" id="run-search" onClick={this.handleFormSubmit}>
                                    <i className="fa fa-search"></i> Search</button>
                                <button className="btn btn-default" id="clear-all">
                                    <i className="fa fa-trash"></i> Clear Results</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;