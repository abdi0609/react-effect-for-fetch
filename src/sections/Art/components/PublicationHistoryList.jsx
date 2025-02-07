function PublicationHistoryList({ history }) {
    return (
      <ul>
        {history && history.length > 0 ? (
          history.map((entry, index) => <li key={index}>{entry}</li>)
        ) : (
          <li>No publication history available</li>
        )}
      </ul>
    );
  }
  
  export default PublicationHistoryList;
  
