function ArticleImageComponent({ image, source, height, width }) {
    function getSource() {
        if (source.includes("https://")) {
            return <a href={source} target="_blank" rel="noreferrer">{source}</a>;
        }
        return source;
    }

    return (
        <div className="articleImageContainer">
            <img height={height} width={width} src={image} alt={source || 'unknown source'} />
            <div className="articleImageSource">
                {getSource()}
            </div>
        </div>
    );
}

export default ArticleImageComponent;
