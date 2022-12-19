import styles from "./loading.module.css"

const LoadingContent = ({loading, error}) => {

    let displayContent = null

    if (loading){
        displayContent = "LOADING......."
    }else if (error){
        displayContent = "Something went wrong please check the url...."
    }


    return <div className={styles.displayLoading}>{displayContent}</div>
}


export default LoadingContent;