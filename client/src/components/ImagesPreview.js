const ImagesPreview = ({url, heading}) => {
    return (
        <div>
            {url && <div>
                <h1 className="right-heading">{heading}</h1>
                <div className="preivew-image">
                    <img src={url} alt="image" className="w-full h-full object-cover" />
                </div>
                </div>}
        </div>
    )
}
export default ImagesPreview;