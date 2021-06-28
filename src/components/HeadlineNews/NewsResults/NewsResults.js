export default function NewsResults({ headlines }) {
    if (headlines.length === 0) {
        return (
            <h1>No Results</h1>
        )
    } else {
        return (
            <div className="news-container">
                {headlines.map((headline) => {
                    if (headline.author) {
                        console.log(headlines)
                        return (
                            <div className="news-item">
                                <img src={headline.urlToImage} alt={headline.title} className="news-image" />
                                <div className="text">
                                    <h1>{headline.title}</h1>
                                    <h2>{headline.author}</h2>
                                    <h3>Source: {headline.source.name}</h3>
                                    <h4>{headline.description}</h4>
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
