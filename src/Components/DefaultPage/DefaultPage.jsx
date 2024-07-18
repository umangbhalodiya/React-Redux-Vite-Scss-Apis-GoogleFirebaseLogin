import ErrorBoundary from "../ErrorPage/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function DefaultPage({ children }) {
  return (
    <ErrorBoundary>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
