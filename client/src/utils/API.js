import axios from "axios";

export default {
//Searches for top 10 articles for the serach term
searchArticles: function(searchTerm) {
    console.log("searching for " + searchTerm);
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const APIKEY = "F8ZrwdUArZsMhEUMSAS2ZYAAp4lW04Kx";
    return axios.get(`${BASEURL}?api-key=${APIKEY}&q=${searchTerm}&sort=newest`);
},
//Save article to db
saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
},
//Gets saved Articles
getArticles: function() {
    return axios.get("/api/articles");
},
//Deletes article from database
deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
}
};