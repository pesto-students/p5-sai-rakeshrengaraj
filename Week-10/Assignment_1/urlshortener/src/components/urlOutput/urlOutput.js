import styles from "./urlOutput.module.css";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const UrlResult = ({ shortUrl, error }) => {
  const [copied, setCopied] = useState(false);

  //  Runs to set the css of copy clipboard back to default after 1 second whenever text is copied
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <div className={styles.urlOutput}>
      <div className={styles.displayOutput}>{shortUrl}</div>

      <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
        <button className={copied ? styles.copyOutput : styles.notCopied}>
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default UrlResult;
