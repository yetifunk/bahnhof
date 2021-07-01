export default function NewsResults({ headlines }) {
    if (headlines.length === 0) {
        return (
            <h1>No Results</h1>
        )
    } else {
        return (
            <div className="news-container">
                {headlines.map((headline) => {
                    if (headline.title) {
                        return (
                            <div className="news-item" key={headline.publishedAt}>
                                <img src={headline.image} alt={headline.title} className="news-image" />
                                <div className="text">
                                    <h1>{headline.title}</h1>
                                    <h3>Source: {headline.source.name}</h3>
                                    <h4>{headline.description}</h4>
                                    <a href={headline.url} target="_blank"><h4>Read More...</h4></a>
                                </div>
                            </div>
                            )
                        } else {
                            return null;
                        }
                })}
            </div>
        )
    }
}