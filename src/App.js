import { useEffect, useState } from "react";
import "./App.css";
import ListPage from "./ListPage";
import SearchBar from "./SearchBar";
import { getPosts } from "./api/axios";

function App() {
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getPosts()
            .then((json) => {
                setPosts(json);
                return json;
            })
            .then((json) => {
                setSearchResults(json);
            });
    }, []);

    return (
        <>
            <SearchBar posts={posts} setSearchResults={setSearchResults} />
            <ListPage searchResults={searchResults} />
        </>
    );
}

export default App;
