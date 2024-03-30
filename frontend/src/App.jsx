import { Routes, Route, BrowserRouter } from "react-router-dom";
import bookimg from "./assets/img/book-1.png";

import { Discount } from "./components/Discount";
import { NewBooks } from "./components/NewBooks";
import { Testimonials } from "./components/Testimonials";
import { HomePage } from "./components/HomePage";
import { BookDetailPage } from "./components/BookDetailPage";
import { ListBook } from "./components/ListBook";
import { MyCart } from "./components/MyCart";
import { ThemeProvider } from "./components/ThemeContext";
import { AddReview } from "./components/AddReview";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/book-detail"
              element={<BookDetailPage img={bookimg} />}
            />
            <Route path="/add-new-book" element={<ListBook />} />
            <Route path="/cart-details" element={<MyCart />} />
            <Route path="/share-testimonial" element={<AddReview />} />
            <Route path="/my-profile" element={<UserProfile />} />

       
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
