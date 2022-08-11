import { format, parseISO } from "date-fns";

const Card = ({
  url,
  urlToImage,
  title,
  description,
  publishedAt,
  source,
}) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"><a href={url} target="_blank" rel="noreferrer">{title}</a></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Source: {source}</small></p>
                    <p className="card-text"><small className="text-muted">Published on: {format(parseISO(publishedAt), "dd/MM/yyyy")} at {format(parseISO(publishedAt), "HH:mm")} hs.</small></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <a href={url} target="_blank" rel="noreferrer"><img src={urlToImage} className="img-fluid rounded-start" alt={urlToImage} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

