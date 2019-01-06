import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";

class FuckitWeAreDoingItLive extends Component {
    state = {
        searchTerm: "",
        resArticles: [],
        savedArticles: []
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
        .then(res => 
            this.setState({savedArticles: res.data})
            )
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchTerm);
        if (this.state.searchTerm) {
            API.searchArticles(this.state.searchTerm)
                .then(res =>
                    this.setState({ resArticles: res.data.response.docs, searchTerm: "" }),
                    document.getElementById("search-term").value = "")
                .catch(err => console.log("error " + err))
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    clearResults = event => {
        event.preventDefault();
        this.setState({resArticles: [], searchTerm: ""});
        document.getElementById("search-term").value = "";
    };

    saveArticle = artibleObj => {
        console.log(artibleObj)
        API.saveArticle({
            nyt_id: artibleObj[0],
            title: artibleObj[1],
            date: artibleObj[2],
            url: artibleObj[3]
        })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };

    deleteArticle = (id) => {
        API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
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
                                        <input type="text" className="form-control" id="search-term" name="searchTerm" onChange={this.handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-default" id="run-search" onClick={this.handleFormSubmit}>
                                        <i className="fa fa-search"></i> Search</button>
                                    <button className="btn btn-default" id="clear-all" onClick={this.clearResults}>
                                        <i className="fa fa-trash"></i> Clear Results</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <br />

                        <div className="card">

                            <div className="card-header">
                                <strong>
                                    <i className="fa fa-table"></i> Top Articles</strong>
                            </div>

                            <div className="card-body" id="article-section">
                                {this.state.resArticles.length ? (
                                    <List>
                                        {this.state.resArticles.map(article => {
                                            return (
                                                <ListItem key={article._id}>
                                                    <p>{article.headline.main}</p>
                                                    <p>{article.pub_date}</p>
                                                    <a href={article.web_url}>{article.web_url}</a>
                                                    <SaveBtn onClick={() => this.saveArticle([article._id, article.headline.main, article.pub_date, article.web_url])} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <br />

                        <div className="card">

                            <div className="card-header">
                                <strong>
                                    <i className="fa fa-table"></i> Saved Articles</strong>
                            </div>

                            <div className="card-body" id="saved-section">
                            {this.state.savedArticles.length ? (
                                    <List>
                                        {this.state.savedArticles.map(article => {
                                            return (
                                                <ListItem key={article._id}>
                                                    <p>{article.title}</p>
                                                    <p>{article.date}</p>
                                                    <a href={article.url}>{article.url}</a>
                                                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default FuckitWeAreDoingItLive;