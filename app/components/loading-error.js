const LoadingError = ({ loadError }) => {
    return (
        <div className="loading-error">
             <p>Error Loading projects: {loadError} 🤦</p>
        </div>
    );
}

export default LoadingError;