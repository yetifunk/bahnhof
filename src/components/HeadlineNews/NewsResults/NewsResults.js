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
                        console.log(headline.title)
                        return (
                            <div className="news-item">
                                <h3>{headline.title}</h3>
                                <img src={headline.urlToImage} alt={headline.title} />
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


