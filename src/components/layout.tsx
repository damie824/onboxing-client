import { useEffect } from "react";
import axios from "axios";
import Footer from "./global/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = window.location.pathname;

  useEffect(() => {
    async function prepare() {
      if (location !== "/login") {
        try {
          const res = await axios.get(
            `http://${process.env.REACT_APP_BACKEND_URL}/auth/check-login`,
            {
              withCredentials: true,
            }
          );
          if (res.status !== 200) {
            window.location.href = "/login";
          }
        } catch (err) {
          window.location.href = "/login";
        }
      }
    }

    prepare();
  }, []);

  return (
    <div className="layout">
      <div className="layout-logo">
        <a href="/">
          <img src="/brand/logo.png" />
        </a>
        <h1>ONBOXING</h1>
        <h3>
          혼자 하는 공유 배송
          <br />
          온박싱에서.
        </h3>
      </div>
      <div className="layout-body">
        {children}
        {location !== "/login" ? <Footer /> : <></>}
      </div>
    </div>
  );
}
