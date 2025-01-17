import React, { useState, useEffect } from "react";
import StoryCard from "../components/StoryCard";
import StorySkeleton from "../components/StorySkeleton";
import SearchBox from "../components/SearchBox";

const fetchTopStories = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const storyIds = await response.json();
  const stories = await Promise.all(
    storyIds.slice(0, 100).map(async (id) => {
      const storyResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return storyResponse.json();
    })
  );
  return stories;
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const stories = await fetchTopStories();
      setData(stories);
      setIsLoading(false);
    };
    getData();
  }, []);

  const filteredStories = data?.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mb-4">Hacker News Top Stories</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        Array.from({ length: 10 }).map((_, index) => <StorySkeleton key={index} />)
      ) : (
        filteredStories?.map((story) => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default Index;