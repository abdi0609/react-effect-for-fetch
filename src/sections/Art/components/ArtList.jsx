import ArtListItem from "./ArtListItem";

function ArtList({ arts }) {
  return (
    <ul className="art-list">
      {arts.length > 0 ? (
        arts.map((art) => <ArtListItem key={art.id} art={art} />)
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
}

export default ArtList;
