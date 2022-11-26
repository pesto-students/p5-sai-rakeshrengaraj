// import React, { useState } from "react";
import styles from "./urlContainer.module.css"
import LoadingContent from "../displayLoading/loading";
import UrlInputValue from "../urlInput/urlInput";
import UrlResult from "../urlOutput/urlOutput";

function UrlContainer({ getInputValue, shortUrl, loading, error }) {

  return (
    <main className={styles.urlContainer}>
      <div className={styles.containerHeader}>
        <h1>More than just shorter Links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <div className={styles.containerInput}>

        <UrlInputValue getInputValue={getInputValue} />

        {(loading || error) ? (
          <LoadingContent loading={loading} error={error}/>
        ) : shortUrl.length ? (
          <UrlResult shortUrl={shortUrl} error={error}/>
        ) : null}

      </div>
    </main>
  );
}

export default UrlContainer;
