import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import GetNewAPI from "../component/GetNewAPI";
import NoRecords from "./NoRecords";
import Loading from "./Loading";
import Card from "./card";
import Footer from "./Footer";

function ListArtic({ search }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore] = useState(true);

  useEffect(() => {
    if (search && search.length > 0) {
      setIsLoading(true);
    }
    if (search && search.length >= 3) {
      const getArticles = async () => {
        const response = await GetNewAPI(search, page);

        setTotalResults(response.data.totalResults);
        setArticles((prevPage) => prevPage.concat(response.data.articles));
        setIsLoading(false);
      };
      getArticles();
    }
  }, [search, page]);

  if (!isLoading && articles.length === 0) {
    return <NoRecords />;
  }

  if (isLoading && articles.length === 0) {
    return <Loading />;
  }

  return (
    <InfiniteScroll
      dataLength={articles.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
    >
      <div className="container mt-5">
        <p>Está viendo {articles.length} noticias de {totalResults} resultados.</p>
      </div>
      {articles.map((article, index) => {
        return(
          <Card
            key={index}
            article={article}
            articleLength={articles.length}
            totalResults={totalResults}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            source={article.source.name}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
      <Footer />
    </InfiniteScroll>
  );
}

export default ListArtic;