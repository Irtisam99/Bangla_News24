import Link from "next/link";

const styles = `
  .nf-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background: #fff5f5;
    color: #7f1d1d;
  }

  .nf-code {
    margin: 0;
    font-size: clamp(72px, 18vw, 120px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -2px;
    color: #dc2626;
  }

  .nf-text {
    margin: 16px 0 32px;
    font-size: 16px;
    color: #991b1b;
    opacity: 0.8;
  }

  .nf-link {
    display: inline-block;
    padding: 10px 24px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    background: #dc2626;
    transition: background 0.2s ease;
  }
  .nf-link:hover { background: #b91c1c; }
  .nf-link:focus-visible { outline: 2px solid #dc2626; outline-offset: 3px; }
`;

const NotFound = () => {
    return (
        <div className="nf-root">
            <style>{styles}</style>
            <main>
                <h1 className="nf-code">404</h1>
                <p className="nf-text">This page could not be found.</p>
                <Link href="/" className="nf-link">
                    Back to home
                </Link>
            </main>
        </div>
    );
};

export default NotFound;