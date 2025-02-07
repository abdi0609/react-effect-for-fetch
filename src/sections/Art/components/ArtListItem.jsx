import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ art }) {
  const baseUrl = "https://boolean-uk-api-server.fly.dev/";

  return (
    <li>
      <div className="frame">
        <img src={`${baseUrl}${art.imageURL}`} alt={art.title} />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList history={art.publicationHistory} />
    </li>
  );
}

export default ArtListItem;
